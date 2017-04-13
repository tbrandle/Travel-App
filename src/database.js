import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA-BIWbCv_RZswQ2mPpXb1iGYUQLMunS1I",
    authDomain: "travel-app-sch-1491500719051.firebaseapp.com",
    databaseURL: "https://travel-app-sch-1491500719051.firebaseio.com",
    projectId: "travel-app---sch-1491500719051",
    storageBucket: "travel-app---sch-1491500719051.appspot.com",
    messagingSenderId: "722898624860"
  };

firebase.initializeApp(config)
const database = firebase.database();

export default database;
