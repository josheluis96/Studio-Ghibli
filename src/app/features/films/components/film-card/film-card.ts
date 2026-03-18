import { Component, computed, input } from '@angular/core';
import { Film } from '../../../../core/models/film.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FilmTree } from '../film-tree/film-tree';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';

@Component({
  selector: 'app-film-card',
  imports: [CardModule, ButtonModule, FilmTree],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();

}
