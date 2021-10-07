import {async, fakeAsync, TestBed} from '@angular/core/testing';

import { TodoService } from './todo.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('TodoService', () => {

  let todoService: TodoService;
  let httpTestingController: HttpTestingController;
  let todoUrl = 'http://localhost:8080/todo';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
        .compileComponents();
  }));
  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => todoService = TestBed.get(TodoService));
  beforeEach(() => httpTestingController = TestBed.get(HttpTestingController));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it('should return an Observable<TodoItem[]>', fakeAsync(() => {
    const dummyItems = [
      { title: 'one', done: false },
      { title: 'two', done: true },
    ];

    todoService.getAllTodoItems().subscribe(items => {
      expect(items.length).toBe(2);
      expect(items).toEqual(dummyItems);
    });

    const req = httpTestingController.expectOne(todoUrl);
    expect(req.request.method).toBe("GET");
    req.flush(dummyItems);
  }));

});
