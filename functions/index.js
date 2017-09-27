const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

var inerval = null;t
var timeNow = function() {
  console.log('time now is ' + new Date().getTime());
  return new Date().getTime();
}

console.log('JUST A MASSAGE');
timeNow();

exports.fcmSend = functions.database.ref('/items/{userUID}').onWrite(event => {
    if(!interval) {
      console.log('stop interval');
      clearInterval(interval);
    } else {

    }
    const userId  = event.params.userUID;
    const post = event.data.val();
    const payload = {
          notification: {
            title: ' TITLE IS : OMRI IS VERY VERY VERY VERY VERY VERY VERY GAY',
            body: 'OMRI IS VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY GAY',
            icon: "https://placeimg.com/250/250/people",
          }
        };  
     admin.database()
          .ref(`/fcmTokens/${userId}`).once("value" , function(snapshot) {
            token = snapshot.val().myToken;
            admin.messaging().sendToDevice(token, payload);
          });
          // .then(res => {
          //   console.log("Sent Successfully", res);
          // })
          // .catch(err => {
          //   console.log(err);
          // });
         interval = setInterval(function() {
            console.log('Passed 10 sec');
            getTime(userId);
          }, 10000);
});

function getTime(userId) { 
  var payload;
  var now = new Date().getTime();
  console.log('today second is ', now);
  admin.database().ref(`/items/${userId}`).once("value", function(snapshot) {
    console.log('this is snapshot');
    console.log(snapshot.val());
    for ( var i in snapshot.val() )
    {
      if ((snapshot.val()[i].toSec - now < 600)&& (snapshot.val()[i].toSec - now>=0)) { // 60sec * 10min = 600 sec 
        payload = {
          notification: {
            title: i,
            body: snapshot.val()[i].msg,
            icon: "https://placeimg.com/250/250/people"
          }
        }; 
        admin.messaging().sendToDevice(token, payload);
      } 
    }
  });
}