const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

let timeNow = function () {
  return new Date().getTime();
};

let accountsArr = [];
let counter = 0;
let uid;
let status;

let interval = function () {
  setInterval(function () {
    // console.log(counter, accountsArr);
    accountsArr.forEach(function (user) {
      if (user.isLoggedIn) {
        try {
          if (!user.myToken) {
            admin.database().ref(`/fcmTokens/${user.uid}`).once("value", function (snapshot) {
              user.myToken = snapshot.val().myToken;
            });
          }
          console.log('Test', user.myToken);
          if (user.myToken && user.myToken !== '') {
            console.log('calling getTime');
            getTime(user.uid, user.myToken);
          }
        }
        catch (err) {
          console.error('error', err);
        }
      }

    });

    if (counter === 120) {
      clearInterval(this);
    }
    counter++;
  }, 30000);
};

interval();

function getTime(userId, token) {
  var payload;
  admin.database().ref(`/items/${userId}`).once("value", function (snapshot) {
    for (var i in snapshot.val()) {
      console.log('for task "', i, '" time left is: ', snapshot.val()[i].toSec - timeNow(), ' miliseconds to pop up');
      if (snapshot.val()[i].toSec - timeNow() < 600000 && !snapshot.val()[i].timePassed && !snapshot.val()[i].wasNotified) { // 60sec * 10min = 600 sec => 600000 milisec
        // console.log('Time Now Is ' + new Date(timeNow()));
        // console.log('Time in item ' + new Date(snapshot.val()[i].toSec));
        if ((snapshot.val()[i].toSec - timeNow() >= 0)) {
          // console.log('SHOULD BE NOTIFICATION');
          // console.log(!snapshot.val()[i].timePassed);
          payload = {
            notification: {
              title: 'REMINDER NOTIFICATION',
              body: snapshot.val()[i].msg,
              icon: 'http://www.opusspark.com/images/notification_icon.png'
            }
          };
          admin.messaging().sendToDevice(token, payload);
          admin.database().ref(`/items/${userId}/${i}`).update({
            wasNotified: true
          });
        } else {
          admin.database().ref(`/items/${userId}/${i}`).update({
            timePassed: true
          });
        }
      }
    }
  });
}

exports.createAcc = functions.database.ref('users/{userUID}').onCreate(event => {
  newUserAccount = {
    uid: event.params.userUID,
  };
  isLoggedIn(event.params.userUID).then(snapshot => {
    newUserAccount.isLoggedIn = snapshot.val()._logedIn;
  })
  accountsArr.push(newUserAccount);
});

exports.createAcc = functions.database.ref('users/{userUID}').onUpdate(event => {
  accountsArr.forEach(function (user) {
    if (user.uid === event.params.userUID) {
      isLoggedIn(event.params.userUID).then(snapshot => {
        user.isLoggedIn = snapshot.val()._logedIn;
      });
      return;
    }
  });
});

const isLoggedIn = function updateStatus(uid) {
  return admin.database().ref(`/users/${uid}`).once("value", function (snapshot) {
    return snapshot.val()._logedIn;
  });
};





// , snapshot.val()._logedIn

// class User {

//   constructor(uid) {
//     this.uid = uid;
//     this.status = false;
//   }
//   intervalItemListener() {
//     setInterval(function() {
//       console.log('Listener interval', this.uid);
//     },10000);
//   };

//   intervalLoginLogout() {
//     let innerInterval = null;
//     setInterval(() => {
//       this.updateStatus();
//       console.log(' in interval ', this.uid);
//       console.log('my status is ', this.status);
//       if(this.status === true) {
//         if(!innerInterval) {
//           innerInterval = this.intervalItemListener();
//         }
//       } else {
//         if(innerInterval) {
//           clearInterval(innerInterval);
//           innerInterval = null;
//         }
//       }
//     }, 5000);
//   };

//   }
// }
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