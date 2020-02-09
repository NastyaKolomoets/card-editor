import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { CardsModule } from './cards/cards/cards.module';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { CardListModule } from './cards/card-list/card.list.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    CardsModule,
    CardListModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
