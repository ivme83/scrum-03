import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

// Sign Out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) => auth.currentUser.updatePassword(password);


// // Google Sign In PopUp
// export const GoogleSignInWithPopup = () => auth.signInWithPopup(provider).then(function(result) {
//     // // This gives you a Google Access Token. You can use it to access the Google API.
//     // let token = result.credential.accessToken;
//     // // The signed-in user info.
//     // let user = result.user;

//     // console.log(token);
//     // console.log(user);
//     // // ...
//   }).catch(function(error) {
//     // // Handle Errors here.
//     // let errorCode = error.code;
//     // let errorMessage = error.message;
//     // // The email of the user's account used.
//     // let email = error.email;
//     // // The firebase.auth.AuthCredential type that was used.
//     // let credential = error.credential;
//     // // ...
//   });
