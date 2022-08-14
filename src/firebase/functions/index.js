const functions = require('firebase-functions');
const app = require('express')();
// const app = express();
const {db} = require('./utils/admin')
const FBAuth = require('./utils/FBAuth')
const {
    getAllScreams,
    postOneScream,
    getScream,
    commentOnScream,
    likeScream,
    unlikeScream,
    deleteScream
} = require('./handlers/screams');

const {
    signup,
    login,
    addUserDetails,
    getAuthenticatedUser,
    getUserDetails,
    markNotificationsRead
} = require('./handlers/users')

//Scream routes
app.get('/screams', getAllScreams)
//Post One Scream
app.post('/scream', FBAuth, postOneScream)
app.get('/scream/:screamId', getScream)
app.delete('/scream/:screamId', FBAuth, deleteScream)
app.get('/scream/:screamId/like', FBAuth, likeScream)
app.get('/scream/:screamId/unlike', FBAuth, unlikeScream)

/**User Routes */

//TODO delete
app.post('/scream/:screamId/comment', FBAuth, commentOnScream)
//TODO like
//TODO unlike
//TODO comment SIgnup-route
app.post('/signup', signup)
//Login
app.post('/login', login)
app.post('/user', FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser)
app.get('/user/:handle', getUserDetails)
app.post('/notifications', markNotificationsRead)

exports.api = functions
    .https
    .onRequest(app);

//Create Notification
exports.createNotificationOnLike = functions
    .firestore
    .document('likes/{id}')
    .onCreate((snapshot) => {
        return db
            .doc(`/screams/${snapshot.data().screamId}`)
            .get()
            .then((doc) => {
                if (doc.exists && doc.data().userHandle !== snapshot.data().userHandle) {
                    return db
                        .doc(`/notifications/${snapshot.id}`)
                        .set({
                            createdAt: new Date().toISOString(),
                            recipient: doc
                                .data()
                                .userHandle,
                            sender: snapshot
                                .data()
                                .userHandle,
                            type: 'like',
                            read: false,
                            screamId: doc.id
                        });
                }
            })
            .catch((err) => console.error(err));
    });

//Delete Notification
exports.deleteNotificationOnUnLike = functions
    .firestore
    .document('likes/{id}')
    .onDelete((snapshot) => {
        return db
            .doc(`/notifications/${snapshot.id}`)
            .delete()
            .catch((err) => {
                console.error(err);
                return;
            });
    });

//Create Notification
exports.createNotificationOnComment = functions
    .firestore
    .document('comments/{id}')
    .onCreate((snapshot) => {
        return db
            .doc(`/screams/${snapshot.data().screamId}`)
            .get()
            .then((doc) => {
                if (doc.exists && doc.data().userHandle !== snapshot.data().userHandle) {
                    return db
                        .doc(`/notifications/${snapshot.id}`)
                        .set({
                            createdAt: new Date().toISOString(),
                            recipient: doc
                                .data()
                                .userHandle,
                            sender: snapshot
                                .data()
                                .userHandle,
                            type: 'comment',
                            read: false,
                            screamId: doc.id
                        });
                }
            })
            .catch((err) => {
                console.error(err);
                return;
            });
    });

//Scream Delete
exports.onScreamDelete = functions
    .firestore
    .document('/screams/{screamId}')
    .onDelete((snapshot, context) => {
        const screamId = context.params.screamId;
        const batch = db.batch();
        return db
            .collection('comments')
            .where('screamId', '==', screamId)
            .get()
            .then((data) => {
                data.forEach((doc) => {
                    batch.delete(db.doc(`/comments/${doc.id}`));
                });
                return db
                    .collection('likes')
                    .where('screamId', '==', screamId)
                    .get();
            })
            .then((data) => {
                data.forEach((doc) => {
                    batch.delete(db.doc(`/likes/${doc.id}`));
                });
                return db
                    .collection('notifications')
                    .where('screamId', '==', screamId)
                    .get();
            })
            .then((data) => {
                data.forEach((doc) => {
                    batch.delete(db.doc(`/notifications/${doc.id}`));
                });
                return batch.commit();
            })
            .catch((err) => console.error(err));
    });
