import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './cards/munchkin/views/list-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
