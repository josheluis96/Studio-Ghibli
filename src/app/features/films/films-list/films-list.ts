import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GhibliApi } from '../../../core/services/ghibli-api';
import { Film } from '../../../core/models/film.model';
import { FilmCard } from '../components/film-card/film-card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-films-list',
  imports: [CommonModule, ButtonModule, FilmCard],
  templateUrl: './films-list.html',
  styleUrl: './films-list.scss',
})
export class FilmsList implements OnInit {
  private readonly ghibliService = inject(GhibliApi);
  private readonly destroyRef = inject(DestroyRef);

  films = signal<Film[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadFilms();
  }

  private loadFilms(): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.ghibliService.getFilms()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.films.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error al cargar películas', err);
          this.error.set('No se pudieron cargar las películas. Intenta de nuevo.');
          this.isLoading.set(false);
        },
      });
  }

  retry(): void {
    this.loadFilms();
  }
}
