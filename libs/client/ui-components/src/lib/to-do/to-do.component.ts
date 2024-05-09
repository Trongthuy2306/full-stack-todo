import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodo } from '@fst/shared/domain';
@Component({
  selector: 'fst-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoComponent {
  @Input() todo: ITodo | undefined;
  @Output() toggleComplete = new EventEmitter<boolean>();
  @Output() editTodo = new EventEmitter<ITodo>();
  @Output() deleteTodo = new EventEmitter<ITodo>();
}