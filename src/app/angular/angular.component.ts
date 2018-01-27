import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {TodoVO} from "../domain/todo.vo";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translate(0, 0)'})),
      transition('void => *', [
        style({opacity: 0, transform: 'translate(-100%, 0)'}),
        animate(300)
      ]),
    ])
  ]

})
export class AngularComponent implements OnInit {
  todoList: Array<TodoVO>;
  newTodo: TodoVO = new TodoVO(); // 투두 추가를 위한 객체
  // 수정시 담을 컬렉션
  tempTodoList = new Map<number, TodoVO>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.userService.getTodoList()
      .subscribe((data: Array<TodoVO>) => {
        console.log(data);
        this.todoList = data;
      });
  }

  addTodo() {
    console.log('addTodo');
    this.userService.addTodo(this.newTodo)
      .subscribe((data: TodoVO) => this.todoList.unshift(data));
  }

  // 템플릿 폼을 에디터로 전환
  save(item: TodoVO) {
    item.isEdited = true;
    // 기존값 저장: shallow copy (x) deep copy(o)
    const newTodo = new TodoVO();
    newTodo.isFinished = item.isFinished;
    newTodo.todo = item.todo;
    this.tempTodoList.set(item.todo_id, newTodo);
  }
  // 서버에 데이터를 삭제
  remove(item: TodoVO) {
    const result = confirm('do you want to delete it?');

  }

  // 서버에 데이터 수정
  modify(item: TodoVO) {
    this.userService.modifyTodo(item).
      subscribe((data: TodoVO) => {
        item.isFinished = data.isFinished;
        item.todo = data.todo;
        item.updated = data.updated;

        item.isEdited = false;
    });
  }

  // 에디터 폼을 원래대로 복귀
  restore(item: TodoVO) {
    item.isEdited = false;
    // 기존값 복원
    const todoVO = this.tempTodoList.get(item.todo_id);
    item.isFinished = todoVO.isFinished;
    item.todo = todoVO.todo;
  }
}
