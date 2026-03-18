import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../../../core/models/vehicle.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ClickableUrlDirective } from '../../../../shared/directives/clickable-url.directive';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, ClickableUrlDirective],
  templateUrl: './vehicle-card.html',
  styleUrl: './vehicle-card.scss',
})
export class VehicleCard {
  vehicle = input.required<Vehicle>();
  expandedDetails = signal<boolean>(false);

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
    const vehicleId = this.vehicle().id;
    const hash = vehicleId.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return this.colors[hash % this.colors.length];
  });

  toggleDetails(): void {
    this.expandedDetails.update((v) => !v);
  }
}

