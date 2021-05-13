import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MunchkinDeckComponent } from "./cards/munchkin/deck/munchkin-deck.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: MunchkinDeckComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
