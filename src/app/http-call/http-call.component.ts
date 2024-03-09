import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-http',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Completed</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let todo of todos">
          <tr>
            <td>{{ todo.title }}</td>
            <td>{{ todo.completed }}</td>
          </tr>
        </ng-container>
      </tbody>
    </table>
  `,
})
export class HttpCallComponent implements OnInit {
  todos: any[] = [];

  constructor(private service: TodoService) {}
  ngOnInit(): void {
    this.service.getTodos().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.todos = data;
    });
  }
}
