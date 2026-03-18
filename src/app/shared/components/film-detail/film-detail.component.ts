import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../../core/models/film.model';
import { ClickableUrlDirective } from '../../directives/clickable-url.directive';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [CommonModule, ClickableUrlDirective],
  template: `
    @if (data()) {
      <div class="film-detail">
        <h2 class="detail-title">{{ data().title }}</h2>

        @if (data().original_title && data().original_title !== data().title) {
          <p class="original-title">{{ data().original_title_romanised }}</p>
        }

        <div class="detail-section">
          <div class="detail-row">
            <span class="label">Director:</span>
            <span class="value">{{ data().director || 'N/A' }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Productor:</span>
            <span class="value">{{ data().producer || 'N/A' }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Año de estreno:</span>
            <span class="value">{{ data().release_date || 'N/A' }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Duración:</span>
            <span class="value">{{ data().running_time || 'N/A' }} min</span>
          </div>
          <div class="detail-row">
            <span class="label">Puntuación:</span>
            <span class="value">{{ data().rt_score || 'N/A' }}</span>
          </div>
        </div>

        @if (data().description) {
          <div class="detail-section">
            <h3 class="section-title">Descripción</h3>
            <p class="description">{{ data().description }}</p>
          </div>
        }

        @if (data().people && data().people.length > 0) {
          <div class="detail-section">
            <h3 class="section-title">Personajes</h3>
            <div class="links-list">
              @for (personUrl of data().people; track $index) {
                <a [href]="personUrl" target="_blank" rel="noopener" class="url-link" appClickableUrl>
                  {{ personUrl }}
                </a>
              }
            </div>
          </div>
        }

        @if (data().species && data().species.length > 0) {
          <div class="detail-section">
            <h3 class="section-title">Especies</h3>
            <div class="links-list">
              @for (speciesUrl of data().species; track $index) {
                <a [href]="speciesUrl" target="_blank" rel="noopener" class="url-link" appClickableUrl>
                  {{ speciesUrl }}
                </a>
              }
            </div>
          </div>
        }

        @if (data().locations && data().locations.length > 0) {
          <div class="detail-section">
            <h3 class="section-title">Locaciones</h3>
            <div class="links-list">
              @for (locationUrl of data().locations; track $index) {
                <a [href]="locationUrl" target="_blank" rel="noopener" class="url-link" appClickableUrl>
                  {{ locationUrl }}
                </a>
              }
            </div>
          </div>
        }

        @if (data().vehicles && data().vehicles.length > 0) {
          <div class="detail-section">
            <h3 class="section-title">Vehículos</h3>
            <div class="links-list">
              @for (vehicleUrl of data().vehicles; track $index) {
                <a [href]="vehicleUrl" target="_blank" rel="noopener" class="url-link" appClickableUrl>
                  {{ vehicleUrl }}
                </a>
              }
            </div>
          </div>
        }
      </div>
    }
  `,
  styles: [
    `
      .film-detail {
        padding: 1rem 0;
      }

      .detail-title {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
        color: var(--text-color);
      }

      .original-title {
        margin: 0 0 1.5rem 0;
        font-size: 0.95rem;
        color: var(--text-color-secondary);
        font-style: italic;
      }

      .detail-section {
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--surface-border);
      }

      .section-title {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        color: var(--text-color);
      }

      .detail-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--surface-border);
      }

      .detail-row:last-child {
        border-bottom: none;
      }

      .label {
        font-weight: 600;
        color: var(--text-color-secondary);
        min-width: 120px;
      }

      .value {
        color: var(--text-color);
        text-align: right;
      }

      .description {
        margin: 0;
        color: var(--text-color);
        line-height: 1.6;
      }

      .links-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .url-link {
        color: var(--primary-color);
        text-decoration: none;
        word-break: break-all;
        padding: 0.5rem;
        border-radius: 4px;
        transition: background-color 0.2s;
      }

      .url-link:hover {
        background-color: var(--primary-50);
        text-decoration: underline;
      }
    `,
  ],
})
export class FilmDetailComponent {
  data = input.required<Film>();
}
