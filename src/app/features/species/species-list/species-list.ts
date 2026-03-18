import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GhibliApi } from '../../../core/services/ghibli-api';
import { Species } from '../../../core/models/species.model';
import { SpeciesCard } from '../components/species-card/species-card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, SpeciesCard],
  templateUrl: './species-list.html',
  styleUrl: './species-list.scss',
})
export class SpeciesList implements OnInit {
  private readonly ghibliService = inject(GhibliApi);
  private readonly destroyRef = inject(DestroyRef);

  species = signal<Species[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadSpecies();
  }

  private loadSpecies(): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.ghibliService.getSpecies()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.species.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error al cargar especies', err);
          this.error.set('No se pudieron cargar las especies. Intenta de nuevo.');
          this.isLoading.set(false);
        },
      });
  }

  retry(): void {
    this.loadSpecies();
  }
}

