import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../../../core/models/film.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ClickableUrlDirective } from '../../../../shared/directives/clickable-url.directive';

@Component({
  selector: 'app-film-card',
  imports: [CommonModule, CardModule, ButtonModule, ClickableUrlDirective],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();
  expandedPeople = signal<boolean>(false);

  togglePeople(): void {
    this.expandedPeople.update((v) => !v);
  }
}
