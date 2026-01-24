import { Component, input } from '@angular/core';
import { Film } from '../../../../core/models/film.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-film-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();

}
