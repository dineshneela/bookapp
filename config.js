import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCpSkKFws0-Us__km96wibvOGtiXb1yATI",
    authDomain: "book-santa-d35f4.firebaseapp.com",
    projectId: "book-santa-d35f4",
    storageBucket: "book-santa-d35f4.appspot.com",
    messagingSenderId: "266860774677",
    appId: "1:266860774677:web:b10ea82d9ffcc23f13551c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()