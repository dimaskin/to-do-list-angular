import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  todoTitle: string;
  idForTodo: number;

  constructor() { }

  ngOnInit() {
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
        {
          'id': 1,
          'title': 'Finish Angular Screencast',
          'completed': false,
          'editing': false,
        },
        {
          'id': 2,
          'title': 'Take over world',
          'completed': false,
          'editing': false,
        },
        {
          'id': 3,
          'title': 'One more thing',
          'completed': false,
          'editing': false,
        }
      ];
    }

  addTodo(): void {
    if (this.todoTitle.trim.length === 0) {
      return;
    }

    this.todos.push( { 
      id: this.idForTodo, 
      title: this.todoTitle, 
      completed: false, 
      editing: false 
    } )
    
    this.todoTitle = '';
    this.idForTodo++;
  }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    todo.editing = false;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}