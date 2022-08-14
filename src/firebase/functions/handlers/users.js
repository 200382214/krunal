const {admin, db} = require('../utils/admin');

const firebaseConfig = require('../utils/config');
const config = require("../utils/config");

const firebase = require('firebase')
firebase.initializeApp(firebaseConfig);

const { validateSignupData, validateLoginData, reduceUserDetails} = require('../utils/validators')
exports.signup = (req,res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,

    };

    const { valid, errors} = validateSignupData(newUser)

    if(!valid) return res.status(400).json(errors);

  const noImg = "no-img.png";


    let token, userId;
    db.doc(`/users/${newUser.handle}`)
    .get()
    .then(doc => {
        if(doc.exists){
            return res.status(400).json({handle: " This handle is already taken"});
        }else{
            return firebase
            .auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        }
    })
    .then((data) => {
        userId = data.user.uid;
    return data.user.getIdToken();      
    })
    .then((idToken) => {
        token = idToken;
        const userCredentials = {
            handle: newUser.handle,
            email: newUser.email,
            createAt: new Date().toISOString(),
            imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
            userId
        }
        return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    })
    .then(()=> {
        return res.json(201).json({token});
    })
    .catch(err => {

        console.error(err);
        if(err.code === 'auth/email-already-in-use') {
            return res.status(403).json({email: 'Email is already in use'})

        }else{
        return res.status(500).json({ general: "Something went wrong, please try again" });
        }
    })
}

exports.login =  (req,res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };

    const { valid, errors} = validateLoginData(user)

    if(!valid) return res.status(400).json(errors);

   
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
        return data.user.getIdToken();
    })
    .then((token) => {
        return res.json({token})
    })
    .catch((err) => {
            return res.status(403).json({general: 'Wrong Credentials'})
     

    })
}


//ADD User DEtails

exports.addUserDetails = (req,res) => {
  let userDetails =  reduceUserDetails(req.body);

  db.doc(`/users/${req.user.handle}`).update(userDetails)
  .then(()=> {
    return res.json({message: "Details added succesfully"});

  })
  .catch(err => {
    console.error(err)
    return res.status(500).json({error: err.code})
  })
}


//Get User Detals
exports.getAuthenticatedUser = (req, res) => {
    let userData = {};
    db.doc(`/users/${req.user.handle}`).get()
    .then(doc => {
        if(doc.exists){
            userData.credentials = doc.data();
            return db.collection('likes').where('userHandle', '==', req.user.handle).get()
        }
    })
    .then(data => {
        userData.likes = [];
        data.forEach(doc => {
            userData.likes.push(doc.data());
        });
        return db.collection('notifications').where('recipent', '==', req.user.handle).orderBy('createAt', 'desc').limit(10).get();
    })
    .then((data) => {
        userData.notifications = [];
        data.forEach((doc) => {
          userData.notifications.push({
            recipient: doc.data().recipient,
            sender: doc.data().sender,
            createdAt: doc.data().createdAt,
            screamId: doc.data().screamId,
            type: doc.data().type,
            read: doc.data().read,
            notificationId: doc.id,
          });
        });
        return res.json(userData);
    })
        .catch(err => {
        console.error(err)
        return res.status(500).json({error: err.code})
    })
}


exports.markNotificationsRead = (req,res) => {
    let batch = db.batch();
    req.body.forEach(notificationId => {
        const notification = db.doc(`/notifications/${notificationId}`);
        batch.update(notification, { read: true});
    })
    batch.commit()
    .then(() => {
        return res.json({message: 'Notification marked read'})
    })
    .catch(err => {
        console.error(err)
        return res.status(500).json({error: err.code})
    })
}

exports.getUserDetails = (req,res) => {
    let userData = {};
    db.doc(`/users/${req.params.handle}`).get()
    .then(doc => {
        if(doc.exists){
            userData.user = doc.data();
            return db.collection('screams').where('userHandle', "==", req.params.handle).orderBy('createAt', 'desc').get()
        }else{
            return res.status(404).json({error: "User Not Found"})
        }
    })  
    .then(data => {
        userData.screams = [];
        data.forEach( doc => {
            userData.screams.push({
                body: doc.data().body,
                createAt: doc.data().createAt,
                userHandle: doc.data().userHandle,
                likeCount: doc.data().likeCount,
                commentCount: doc.data().commentCount,
                screamId: doc.id
            })

        });
        return res.json(userData)
    })
    .catch(err => {
        console.error(err)
        return res.status(500).json({error: err.code})
    })
}
