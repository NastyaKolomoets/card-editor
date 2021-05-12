import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './core/auth/auth.service';
import { MunchkinModule } from './cards/munchkin/munchkin.module';
import 'froala-editor/js/plugins.pkgd.min.js';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MunchkinModule
  ],
  providers: [
    AuthService,
    AngularFirestore,
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
