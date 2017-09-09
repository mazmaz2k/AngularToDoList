import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { NgModule } from '@angular/core';

/* Firebase Configurations */
export const firebaseConfig = {
    apiKey: 'AIzaSyDwE8MwRZpBdRg_7rvi1UeH95lTpZD5i6U',
    authDomain: 'todoapplicatoin.firebaseapp.com',
    databaseURL: 'https://todoapplicatoin.firebaseio.com',
    projectId: 'todoapplicatoin',
    storageBucket: 'todoapplicatoin.appspot.com',
    messagingSenderId: '20716683033'
  };

@NgModule({
    imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule
    ],
    exports: [AngularFireModule, AngularFireAuthModule]
})

export class FireBaseModule {}
