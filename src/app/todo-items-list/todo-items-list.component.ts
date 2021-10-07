import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {TodoItem} from "../todo-item";

@Component({
  selector: 'app-todo-items-list',
  templateUrl: './todo-items-list.component.html'
})
export class TodoItemsListComponent implements OnInit {

  todoItems: TodoItem[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodoItems().subscribe(response => {
      this.todoItems = response
    });
  }

}
