import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAgRLfnqDZc5j-HrGKSOijP2Au_prVKdck",
    authDomain: "tradezi.firebaseapp.com",
    projectId: "tradezi",
    storageBucket: "tradezi.appspot.com",
    messagingSenderId: "909960127723",
    appId: "1:909960127723:web:9cff2c3600b98ca1210aae",
    measurementId: "G-LSBECPJFY9"
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;

