import { Component, OnInit, inject, signal } from '@angular/core';
import { GhibliApi } from '../../../core/services/ghibli-api';
import { Vehicle } from '../../../core/models/vehicle.model';
import { VehicleCard } from '../components/vehicle-card/vehicle-card';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [VehicleCard],
  templateUrl: './vehicles-list.html',
  styleUrl: './vehicles-list.scss',
})
export class VehiclesList implements OnInit {
  private readonly ghibliService = inject(GhibliApi);

  vehicles = signal<Vehicle[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.ghibliService.getVehicles().subscribe({
      next: (data) => {
        this.vehicles.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar vehículos', err);
        this.isLoading.set(false);
      },
    });
  }
}

