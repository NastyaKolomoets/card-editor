import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCardComponent } from './edit.card.component';
import { MonsterEditComponent } from './doors/monster-edit/monster.edit.component';

const routes: Routes = [
  {
    path: 'edit',
    component: EditCardComponent,
    children: [
      { path: 'monster/:id', component: MonsterEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
