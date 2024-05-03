import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ICreateTodo, ITodo, IUpdateTodo, IUpsertTodo } from '@fst/shared/domain';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  getAllToDoItems(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`/api/server-feature-todo`);
  }


  getToDoById(todoId: string): Observable<ITodo> {
    return this.http.get<ITodo>(`/api/server-feature-todo/${todoId}`);
  }

  createToDo(todoData: ICreateTodo): Observable<ITodo> {
    return this.http.post<ITodo>(`/api/server-feature-todo`, todoData);
  }

  updateToDo(todoId: string, todoData: IUpdateTodo): Observable<ITodo> {
    return this.http.patch<ITodo>(`/api/server-feature-todo/${todoId}`, todoData);
  }

  createOrUpdateToDo(todoId: string, todoData: IUpsertTodo): Observable<ITodo> {
    return this.http.put<ITodo>(`/api/server-feature-todo/${todoId}`, todoData);
  }

  deleteToDo(todoId: string): Observable<never> {
    return this.http.delete<never>(`/api/server-feature-todo/${todoId}`);
  }
}