import { Component, OnInit } from "@angular/core";
import firebase from "firebase/app";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "card-editor";

  user: Observable<firebase.User>;
  currentUser: firebase.User;
  // messages: Observable<any[]>;
  // profilePicStyles: {};
  topics = "";
  value = "";

  constructor() {
  }

  ngOnInit(): void {
  }
}
