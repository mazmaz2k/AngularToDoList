importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: 'AIzaSyDwE8MwRZpBdRg_7rvi1UeH95lTpZD5i6U',
  authDomain: 'todoapplicatoin.firebaseapp.com',
  databaseURL: 'https://todoapplicatoin.firebaseio.com',
  projectId: 'todoapplicatoin',
  storageBucket: 'todoapplicatoin.appspot.com',
  messagingSenderId: '20716683033'
});
const messaging = firebase.messaging();