import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoItemsListComponent} from "./todo-items-list/todo-items-list.component";
import {TodoItemDetailsComponent} from "./todo-item-details/todo-item-details.component";


const routes: Routes = [
    {path: '', redirectTo: 'todo', pathMatch: 'full'},
    {path: 'todo', component: TodoItemsListComponent},
    {path: 'todo/item/:uuid', component: TodoItemDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
