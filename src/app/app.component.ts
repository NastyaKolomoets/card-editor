import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'card-editor';

  user: Observable<firebase.User>;
  currentUser: firebase.User;
  // messages: Observable<any[]>;
  // profilePicStyles: {};
  topics = '';
  value = '';

  constructor(
    public afAuth: AngularFireAuth) {

    this.user = afAuth.authState.pipe(
      filter((user: firebase.User | null) => user !== null)) as Observable<firebase.User>;
    this.user.subscribe((user: firebase.User) => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.login();
  }

  login() {
    this.afAuth.signInAnonymously();
  }
}
