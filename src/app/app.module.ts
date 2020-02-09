import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards/cards.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { CardsModule } from './cards/cards/cards.module';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

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
    CardsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
