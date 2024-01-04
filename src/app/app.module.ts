import { NgModule } from '@angular/core';
import {
  initializeApp,
  provideFirebaseApp,
} from '@angular/fire/app';
import {
  getDatabase,
  provideDatabase,
} from '@angular/fire/database';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { MunchkinModule } from 'app/cards/munchkin/munchkin.module';
import { NavigationComponent } from 'app/core/components';
import { AuthService } from 'app/core/services';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    FormsModule,
    ReactiveFormsModule,
    MunchkinModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
