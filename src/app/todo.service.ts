import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoItem} from "./todo-item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly todoUrl: string;

  constructor(private http: HttpClient) {
    this.todoUrl = 'http://localhost:8080/todo';
  }

  public getAllTodoItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoUrl);
  }

}
