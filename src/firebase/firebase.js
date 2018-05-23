import * as firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "iv-design.firebaseapp.com",
    databaseURL: "https://iv-design.firebaseio.com",
    projectId: "iv-design",
    storageBucket: "iv-design.appspot.com",
    messagingSenderId: "926229406005"
};

// console.log(firebase.app);
// // if (!firebase.app.length){
    firebase.initializeApp(config);
// // }

const db    = firebase.database();
const auth  = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    auth,
    provider,
};