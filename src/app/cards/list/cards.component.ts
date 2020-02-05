import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-cards',
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.css']
})
export class CardsComponent {
  monsters: Observable<any[]>;

  constructor(
    public db: AngularFireDatabase,
    private authService: AuthService
  ) {
    // authService.user.subscribe(user => {
    //   if (user !== null) {
    //     this.monsters = this.db.list<any>('/cards/doors/monsters').valueChanges();
    //   }
    // });
  }
}
