import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TodoItem} from "./todo-item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly todoUrl: string;

  headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  constructor(private http: HttpClient) {
    this.todoUrl = 'http://109.220.136.150:8080/todo/';
  }

  public getAllTodoItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoUrl, {headers: this.headers});
  }

  public getItem(uuid: string): Observable<TodoItem> {
    return this.http.get<TodoItem>(this.todoUrl + "/item/" + uuid);
  }

  public saveItem(item: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.todoUrl, item);
  }

  public updateItem(item: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(this.todoUrl + "/item/" + item.uuid, item);
  }

}
