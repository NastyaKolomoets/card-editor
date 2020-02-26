import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'card-editor';

  user: Observable<firebase.User>;
  currentUser: firebase.User;
  messages: Observable<any[]>;
  profilePicStyles: {};
  topics = '';
  value = '';

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.user.subscribe((user: firebase.User) => {
      console.log(user);
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.login();
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }
}
