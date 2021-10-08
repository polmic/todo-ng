import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {TodoItem} from "../todo-item";
import {Router} from "@angular/router";

@Component({
    selector: 'app-todo-items-list',
    templateUrl: './todo-items-list.component.html'
})
export class TodoItemsListComponent implements OnInit {

    todoItems: TodoItem[];
    doneItems: TodoItem[];
    errorMessage: string;
    successMessage: string;

    constructor(private todoService: TodoService, private router: Router) {
    }

    ngOnInit() {
        this.todoItems = [];
        this.doneItems = [];
        this.todoService.getAllTodoItems().subscribe(items => this._allocateItems(items));
    }

    updateItem(item) {
        item.done = !item.done;
        this.todoService.updateItem(item)
            .subscribe({
                next: result => this._updateArrays(item),
                error: error => this._logError(error.error)
            });
    }

    displayItem(item: TodoItem) {
        this.todoService.getItem(item.uuid)
            .subscribe({
                next: result => this.router.navigate(['/todo/item', result.uuid], {state: {data: result}}),
                error: error => this._logError(error.error)
            });
    }

    /*
        PRIVATE FUNCTIONS
     */

    _allocateItems(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].done ? this.doneItems.push(items[i]) : this.todoItems.push(items[i]);
        }
    }

    _updateArrays(item) {
        if (item.done) {
            this._removeItemFromArray(this.todoItems, item);
            this.doneItems.push(item);
        } else {
            this._removeItemFromArray(this.doneItems, item)
            this.todoItems.push(item);
        }
        this._logSucess("item successfully updated")
    }

    _removeItemFromArray(array, item) {
        array.forEach((value, index) => {
            if (value == item) array.splice(index, 1);
        });
    }

    _logSucess(message) {
        this.successMessage = message;
        setTimeout(() => {
            this.successMessage = "";
        }, 1800);
    }

    _logError(error) {
        console.error(error);
        this.errorMessage = error.message;
        setTimeout(() => {
            this.errorMessage = "";
        }, 5000);
    }

}
