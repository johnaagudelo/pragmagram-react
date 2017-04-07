import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

firebase.initializeApp({
    apiKey: "AIzaSyDdz_lYu3uwHWb5VyrHXtJemHOc2RBickw",
    authDomain: "pseudigram.firebaseapp.com",
    databaseURL: "https://pseudigram.firebaseio.com",
    projectId: "pseudigram",
    storageBucket: "pseudigram.appspot.com",
    messagingSenderId: "247455588331"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
