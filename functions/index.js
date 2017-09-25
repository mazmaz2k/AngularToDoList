const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.fcmSend = functions.database.ref('/items/{userUID}').onCreate(event => {
    const userId  = event.params.userUID;
    console.log('user id ' + userId);
    const payload = {
          notification: {
            title: 'Hello Im title',
            body: 'Hello im body',
            icon: "https://placeimg.com/250/250/people"
          }
        };
        consloe.log('waiting 10 sec');
        setTimeout(() => {
          consloe.log('done');
          return admin.messaging().sendToDevice("elvFeHTKP1A:APA91bHrvw_JZNIUwiMAFy00iQh_EAnWsJ3xCi2E7R1TB29p--IuR-kBKKWHpBQkrqdT1MB9CtR26PHrVBvqmvmc5Dtrwa3lhriogJ-uqz3WYE5ARl4PngvC3BAG9VoQu2c6O9txAzWR", payload);          
        }, 10000);
});

// Adds a message that welcomes new users into the chat.
// exports.addWelcomeMessages = functions.auth.user().onCreate((event) => {
//   const user = event.data;
//   console.log('A new user signed in for the first time.');
//   const fullName = user.displayName || 'Anonymous';

//   // Saves the new welcome message into the database
//   // which then displays it in the FriendlyChat clients.
//   return admin.database().ref('/messages').push({
//     name: 'Firebase Bot',
//     photoUrl: '/assets/images/firebase-logo.png', // Firebase logo
//     text: `${fullName} signed in for the first time! Welcome!`
//   });
// });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
