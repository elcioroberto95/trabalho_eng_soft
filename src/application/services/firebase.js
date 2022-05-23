import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    // apiKey: 'AIzaSyBbm75gKrf7TVrrEmgTxIHHT65_MvVrhwo',
    // authDomain: 'react-trello-clone-51b0e.firebaseapp.com',
    // projectId: 'react-trello-clone-51b0e',
    // storageBucket: 'react-trello-clone-51b0e.appspot.com',
    // messagingSenderId: '106309940838',
    // appId: '1:106309940838:web:5b2bc7eae512b34cd1dfa7',
    // measurementId: 'G-TL0XDG0THS',

    //MEU DB
    apiKey: 'AIzaSyANTDebQ5jhv06X8BPvOIOicphmyrjuu_Y',
    authDomain: 'taskmanager-2e47d.firebaseapp.com',
    projectId: 'taskmanager-2e47d',
    storageBucket: 'taskmanager-2e47d.appspot.com',
    messagingSenderId: '930413212620',
    appId: '1:930413212620:web:a63d64ae629aa3db1d2369',
    measurementId: 'G-SQFXBRQS5T',
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
export const provider = new firebase.auth.GoogleAuthProvider();
