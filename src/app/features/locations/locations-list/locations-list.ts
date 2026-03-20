import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GhibliApi } from '../../../core/services/ghibli-api';
import { LocationData } from '../../../core/models/location.model';
import { LocationCard } from '../components/location-card/location-card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-locations-list',
  imports: [CommonModule, ButtonModule, LocationCard],
  templateUrl: './locations-list.html',
  styleUrl: './locations-list.scss',
})
export class LocationsList implements OnInit {
  private readonly ghibliService = inject(GhibliApi);
  private readonly destroyRef = inject(DestroyRef);

  locations = signal<LocationData[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadLocations();
  }

  private loadLocations(): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.ghibliService.getLocations()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.locations.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error al cargar locaciones', err);
          this.error.set('No se pudieron cargar las locaciones. Intenta de nuevo.');
          this.isLoading.set(false);
        },
      });
  }

  retry(): void {
    this.loadLocations();
  }
}
