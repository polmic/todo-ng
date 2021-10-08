import {Component, OnInit} from '@angular/core';
import {TodoItem} from "../todo-item";
import {Router} from "@angular/router";

@Component({
    selector: 'app-todo-item-details',
    templateUrl: './todo-item-details.component.html'
})
export class TodoItemDetailsComponent implements OnInit {

    todoItem: TodoItem;

    constructor(private router: Router) {
        this.todoItem = this.router.getCurrentNavigation().extras.state.data;
    }

    ngOnInit() {
    }

}
