import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCJQ4hYApUF1-BagDg8ErO814BNPi5x6ZQ',
    authDomain: 'wedding-app-1b48f.firebaseapp.com',
    projectId: 'wedding-app-1b48f',
    storageBucket: 'wedding-app-1b48f.appspot.com',
    messagingSenderId: '270646758778',
    appId: '1:270646758778:web:e3262000ae35b456ba9ac3',
    measurementId: 'G-ZN5S4CXWGD',
};
console.log('firebaseConfig');

if (!firebase.apps.length) {
    console.log('initialize app');

    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
