import { Component, OnInit, inject, signal } from '@angular/core';
import { GhibliApi } from '../../../core/services/ghibli-api';
import { Species } from '../../../core/models/species.model';
import { SpeciesCard } from '../components/species-card/species-card';

@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [SpeciesCard],
  templateUrl: './species-list.html',
  styleUrl: './species-list.scss',
})
export class SpeciesList implements OnInit {
  private readonly ghibliService = inject(GhibliApi);

  species = signal<Species[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.ghibliService.getSpecies().subscribe({
      next: (data) => {
        this.species.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar especies', err);
        this.isLoading.set(false);
      },
    });
  }
}

