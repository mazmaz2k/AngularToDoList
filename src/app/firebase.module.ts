import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase';
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
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ],
    exports: [AngularFireModule, AngularFireAuthModule, AngularFireDatabaseModule]
})

export class FireBaseModule {}
