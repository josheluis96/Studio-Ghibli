import { Component, inject, OnInit, signal } from '@angular/core';
import { GhibliApi } from '../../../core/services/ghibli-api';
import { LocationData } from '../../../core/models/location.model';
import { LocationCard } from '../components/location-card/location-card';

@Component({
  selector: 'app-locations-list',
  imports: [LocationCard],
  templateUrl: './locations-list.html',
  styleUrl: './locations-list.scss',
})
export class LocationsList implements OnInit {
  private readonly ghibliService = inject(GhibliApi);
  locations = signal<LocationData[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.ghibliService.getLocations().subscribe({
      next: (data) => {
        this.locations.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar locaciones', err);
        this.isLoading.set(false);
      },
    });
  }
}
