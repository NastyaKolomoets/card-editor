import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "app/app-routing.module";
import { AppComponent } from "app/app.component";
import { MunchkinModule } from "app/cards/munchkin/munchkin.module";
import { NavigationComponent } from "app/core/components";
import { AuthService } from "app/core/services";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,

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
