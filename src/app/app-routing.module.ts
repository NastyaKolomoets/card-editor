import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
  MunchkinDeckComponent,
} from "./cards/munchkin/deck/munchkin-deck.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: MunchkinDeckComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
