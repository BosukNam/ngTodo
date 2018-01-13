import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {TodoVO} from './Domain/todo.vo';

@Injectable()
export class UserService {
  private SERVER: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getTodoList() {
    return this.http.get(this.SERVER + '/api/todo');
  }

  addTodo(params: TodoVO) {
    // 주소, 바디, 헤더
    return this.http.post(this.SERVER + '/api/todo',
      params, {headers: this.headers});
  }


}
