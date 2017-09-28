const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

let timeNow = function () {
  return new Date().getTime();
};

let user = {};

exports.createAcc = functions.database.ref('fcmTokens/{userUID}').onCreate(event => {
  const userId = event.params.userUID;
  admin.database().ref(`/users/${userId}`).once("value", function (snapshot) {
    user = {
      uid: userId,
      status: snapshot.val()._logedIn
    };
    console.log(user);
  });
});

let intervalLoginLogout = setInterval(function() {
  // CHeck if loggin , Do listerner on items
  // check if logout , keep checking
}, 5000);

let intervalItemListener = setInterval(function() {

},10000);

// admin.database().ref(`/users/${userId}`).once("value", function (snapshot) {
//   console.log(snapshot.val());
//   console.log('create once');
//   if (snapshot.val()._logedIn==false) {
//     console.log('user is logged out');
//     //clearInterval(interval);
//   } else {
//     console.log('user',' is logged in');
//   }
// });


// exports.fcmSend = functions.database.ref('/items/{userUID}').onWrite(event => {
//   if (!interval) {
//     clearInterval(interval);
//   }
//   const userId = event.params.userUID;
//   admin.database()
//     .ref(`/fcmTokens/${userId}`).once("value", function (snapshot) {
//       token = snapshot.val().myToken;
//     });

//   interval = setInterval(function () {

//     admin.database().ref(`/users/${userId}`).once("value", function (snapshot) {
//       console.log(snapshot.val());
//       if (snapshot.val()._logedIn==false) {
//         console.log('user is logged out');
//         clearInterval(interval);
//       } else {
//         console.log('user',userId,' is logged in');
//       }
//     });
//     getTime(userId);
//   }, 10000);
// });

// function getTime(userId) {
//   var payload;
//   admin.database().ref(`/items/${userId}`).once("value", function (snapshot) {
//     for (var i in snapshot.val()) {
//       console.log(snapshot.val()[i].toSec - timeNow());
//       if (snapshot.val()[i].toSec - timeNow() < 600000 && !snapshot.val()[i].timePassed && !snapshot.val()[i].wasNotified) { // 60sec * 10min = 600 sec => 600000 milisec
//         console.log('Time Now Is ' + new Date(timeNow()));
//         console.log('Time in item ' + new Date(snapshot.val()[i].toSec));
//         if ((snapshot.val()[i].toSec - timeNow() >= 0)) {
//           console.log('SHOULD BE NOTIFICATION');
//           console.log(!snapshot.val()[i].timePassed);
//           payload = {
//             notification: {
//               title: i,
//               body: snapshot.val()[i].msg,
//               icon: "https://placeimg.com/250/250/people"
//             }
//           };
//           admin.messaging().sendToDevice(token, payload);
//           admin.database().ref(`/items/${userId}/${i}`).update({
//             wasNotified: true
//           });
//         } else {
//           admin.database().ref(`/items/${userId}/${i}`).update({
//             timePassed: true
//           });
//         }
//       }
//     }
//   });
// }
