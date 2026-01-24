import { Component, inject, OnInit, signal } from '@angular/core';
import { GhibliApi } from '../../../core/services/ghibli-api';
import { Film } from '../../../core/models/film.model';
import { FilmCard } from '../components/film-card/film-card';

@Component({
  selector: 'app-films-list',
  imports: [FilmCard],
  templateUrl: './films-list.html',
  styleUrl: './films-list.scss',
})
export class FilmsList implements OnInit {
  private readonly ghibliService = inject(GhibliApi);
  films = signal<Film[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.ghibliService.getFilms().subscribe({
      next: (data) => {
        this.films.set(data);
        this.isLoading.set(false);
      }, error: (err) => {
        console.error('Error al cargar peliculas', err);
        this.isLoading.set(false);
      }
    })
  }
}
