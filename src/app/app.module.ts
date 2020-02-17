import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { CardsModule } from './cards/cards.module';
import { CardListModule } from './card-list/card-list.module';
import 'froala-editor/js/plugins.pkgd.min.js';

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
