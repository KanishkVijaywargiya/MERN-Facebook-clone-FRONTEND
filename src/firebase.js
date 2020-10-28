import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6_OP_wL9UncyvB4HsCt12KJw51sP3B-Y",
    authDomain: "mern-facebook-clone-daafb.firebaseapp.com",
    databaseURL: "https://mern-facebook-clone-daafb.firebaseio.com",
    projectId: "mern-facebook-clone-daafb",
    storageBucket: "mern-facebook-clone-daafb.appspot.com",
    messagingSenderId: "953093296979",
    appId: "1:953093296979:web:43db78ff6af0209d5507a6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };