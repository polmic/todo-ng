import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoService} from "./todo.service";
import {TodoItemsListComponent} from './todo-items-list/todo-items-list.component';
import {TodoItemDetailsComponent} from './todo-item-details/todo-item-details.component';

@NgModule({
    declarations: [
        AppComponent,
        TodoItemsListComponent,
        TodoItemDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
