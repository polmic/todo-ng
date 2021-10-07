import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoItemsListComponent} from "./todo-items-list/todo-items-list.component";


const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodoItemsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
