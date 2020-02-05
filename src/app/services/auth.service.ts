import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  // user: Observable<firebase.User>;
  // currentUser: firebase.User = null;

  // constructor(
  //   public afAuth: AngularFireAuth
  // ) {
  //   this.user = afAuth.authState;
  // }

  // login() {
  //   this.afAuth.auth.signInAnonymously();
  //   // this.afAuth.auth.signInAnonymously(new firebase.auth.GoogleAuthProvider())
  //   // .then(result => {
  //   //   this.currentUser = result.user;
  //   // });
  // }
}
