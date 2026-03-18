import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationData } from '../../../../core/models/location.model';
import { CardModule } from 'primeng/card';
import { ClickableUrlDirective } from '../../../../shared/directives/clickable-url.directive';

@Component({
  selector: 'app-location-card',
  imports: [CommonModule, CardModule, ClickableUrlDirective],
  templateUrl: './location-card.html',
  styleUrl: './location-card.scss',
})
export class LocationCard {
  location = input.required<LocationData>();

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
    const locationId = this.location().id;
    const hash = locationId.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return this.colors[hash % this.colors.length];
  });
}


