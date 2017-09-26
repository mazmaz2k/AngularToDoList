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
            return admin.messaging().sendToDevice(token, payload);
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
  const payload = {
    notification: {
      title: 'Reminding',
      body: 'kasdjkdsf',
      icon: "https://placeimg.com/250/250/people"
    }
  };  
  var now = new Date().getTime();
  console.log('today second is ', now);
  admin.database().ref(`/items/${userId}`).once("value", function(snapshot) {
    console.log('this is snapshot');
    console.log(snapshot.val());
    for ( var i in snapshot.val() )
    {
        if (snapshot.val()[i].toSec - now < 60000000000) { // 60sec * 10min = 600 sec 
          console.log('notification');
          return admin.messaging().sendToDevice(token, payload);
        } 
    }
  });
}