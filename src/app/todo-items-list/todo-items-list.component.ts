import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {TodoItem} from "../todo-item";

@Component({
    selector: 'app-todo-items-list',
    templateUrl: './todo-items-list.component.html'
})
export class TodoItemsListComponent implements OnInit {

    todoItems: TodoItem[];
    doneItems: TodoItem[];
    errorMessage: string;
    successMessage: string;

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
        this.todoItems = [];
        this.doneItems = [];
        this.todoService.getAllTodoItems().subscribe(items => this._allocateItems(items));
    }

    _allocateItems(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].done ? this.doneItems.push(items[i]) : this.todoItems.push(items[i]);
        }
    }

    updateItem(item) {
        item.done = !item.done;
        this.todoService.updateItem(item)
            .subscribe({
                next: result => this._updateArrays(item),
                error: error => this._logError(error.error)
            });
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
