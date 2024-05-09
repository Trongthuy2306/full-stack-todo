import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@fst/client/data-access';
import { ToDoComponent } from '../../../../ui-components/src/lib/to-do/to-do.component';
import { BehaviorSubject, take } from 'rxjs';
import { ITodo } from '@fst/shared/domain';
@Component({
  selector: 'lib-full-stack-todo-feature-dashboard',
  standalone: true,
  imports: [CommonModule, ToDoComponent],
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
})
export class FeatureDashboardComponent {
  private readonly apiService = inject(ApiService);

  todoItems$ = this.apiService.getAllToDoItems();
  todos$ = new BehaviorSubject<ITodo[]>([]);

  trackTodo(idx: number, todo: ITodo) {
    return todo.id;
  }

  ngOnInit(): void {
    this.refreshItems();
  }

  refreshItems() {
    this.apiService
      .getAllToDoItems()
      .pipe(take(1))
      .subscribe((items) => this.todos$.next(items));
  }

  toggleComplete(todo: ITodo) {
    this.apiService
      .updateToDo(todo.id, { completed: !todo.completed })
      .pipe(take(1))
      .subscribe(() => {
        this.refreshItems();
      });
  }

  deleteTodo({ id }: ITodo) {
    this.apiService
      .deleteToDo(id)
      .pipe(take(1))
      .subscribe(() => {
        this.refreshItems();
      });
  }
}