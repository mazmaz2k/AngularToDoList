const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.fcmSend = functions.database.ref('/items/{userUID}').onWrite(event => {
    const userId  = event.params.userUID;
    const post = event.data.val();
    const payload = {
          notification: {
            title: ' TITLE IS : OMRI IS VERY VERY VERY VERY VERY VERY VERY GAY',
            body: 'OMRI IS VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY GAY',
            icon: "https://placeimg.com/250/250/people"
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
          getTime(userId);
});

function getTime(userId) { 
  var now = new Date().getTime();
  console.log('today second is ', now);
  admin.database().ref(`/items/${userId}`).once("value", function(snapshot) {
    console.log('this is snapshot');
    console.log(snapshot.val());
    for ( var i in snapshot.val() )
    {
      const payload = {
        notification: {
          title: 'Reminding',
          body: snapshot.val()[i].msg,
          icon: "https://placeimg.com/250/250/people"
        }
      }; 
        if (snapshot.val()[i].toSec - now < 600) { // 60sec * 10min = 600 sec 
          console.log('notification');
          admin.messaging().sendToDevice(token, payload);
        } 
    }
  });
}