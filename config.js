import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDw6fBXKvwpRAPFIGwlBYROVVzxBrwPwMQ",
    authDomain: "app5-870ec.firebaseapp.com",
    projectId: "app5-870ec",
    storageBucket: "app5-870ec.appspot.com",
    messagingSenderId: "320698284648",
    appId: "1:320698284648:web:c4c81286ea3745eac319dd",
    measurementId: "G-FP2HKMG3FQ"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };