import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../../../core/models/person.model';
import { CardModule } from 'primeng/card';
import { ClickableUrlDirective } from '../../../../shared/directives/clickable-url.directive';

@Component({
  selector: 'app-person-card',
  imports: [CommonModule, CardModule, ClickableUrlDirective],
  templateUrl: './person-card.html',
  styleUrl: './person-card.scss',
})
export class PersonCard {
  person = input.required<Person>();

  protected readonly colors = [
    '#ef4444',
    '#3b82f6',
    '#10b981',
    '#f59e0b',
    '#8b5cf6',
    '#ec4899',
    '#6366f1',
    '#14b8a6',
  ];

  protected readonly avatarColor = computed(() => {
    const personId = this.person().id;
    const hash = personId.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return this.colors[hash % this.colors.length];
  });
}




