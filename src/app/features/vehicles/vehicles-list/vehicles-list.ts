import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GhibliApi } from '../../../core/services/ghibli-api';
import { Vehicle } from '../../../core/models/vehicle.model';
import { VehicleCard } from '../components/vehicle-card/vehicle-card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, VehicleCard],
  templateUrl: './vehicles-list.html',
  styleUrl: './vehicles-list.scss',
})
export class VehiclesList implements OnInit {
  private readonly ghibliService = inject(GhibliApi);
  private readonly destroyRef = inject(DestroyRef);

  vehicles = signal<Vehicle[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadVehicles();
  }

  private loadVehicles(): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.ghibliService.getVehicles()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.vehicles.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error al cargar vehículos', err);
          this.error.set('No se pudieron cargar los vehículos. Intenta de nuevo.');
          this.isLoading.set(false);
        },
      });
  }

  retry(): void {
    this.loadVehicles();
  }
}

