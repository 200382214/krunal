import* as firebase from 'firebase';

const settings= {timestampsInSnapshots: true}
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCjp99to551QxsADvNyZRUn4rMj5PcmiD8",
    authDomain: "photography-2404.firebaseapp.com",
    databaseURL: "https://photography-2404.firebaseio.com",
    projectId: "photography-2404",
    storageBucket: "photography-2404.appspot.com",
    messagingSenderId: "627618448429",
    appId: "1:627618448429:web:5b67dfead657d7a8d9a4a4"
};
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings)

export default firebase;