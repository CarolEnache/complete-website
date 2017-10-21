import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCBiBgI-wYiDaXYzjG2jAqYrYk88rYs-Cw',
    authDomain: 'complete-website-7a8d6.firebaseapp.com',
    databaseURL: 'https://complete-website-7a8d6.firebaseio.com',
    projectId: 'complete-website-7a8d6',
    storageBucket: 'complete-website-7a8d6.appspot.com',
    messagingSenderId: '280578147440'
};

firebase.initializeApp(config);

export default firebase;