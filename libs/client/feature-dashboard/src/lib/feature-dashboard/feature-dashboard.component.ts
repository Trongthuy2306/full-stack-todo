import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../data-access/src/lib/api.service';
@Component({
  selector: 'full-stack-todo-feature-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
})
export class FeatureDashboardComponent {
  private readonly apiService = inject(ApiService);

  todoItems$ = this.apiService.getAllToDoItems();
}