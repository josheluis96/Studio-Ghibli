import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationData } from '../../../core/models/location.model';
import { ClickableUrlDirective } from '../../directives/clickable-url.directive';

@Component({
  selector: 'app-location-detail',
  standalone: true,
  imports: [CommonModule, ClickableUrlDirective],
  template: `
    @if (data()) {
      <div class="location-detail">
        <h2 class="detail-title">{{ data().name }}</h2>

        <div class="detail-section">
          <div class="detail-row">
            <span class="label">Clima:</span>
            <span class="value">{{ data().climate || 'N/A' }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Terreno:</span>
            <span class="value">{{ data().terrain || 'N/A' }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Agua superficial:</span>
            <span class="value">{{ data().surface_water || 'N/A' }}%</span>
          </div>
        </div>

        <div class="detail-section" *ngIf="data().residents && data().residents.length > 0">
          <h3 class="section-title">Residentes</h3>
          <div class="links-buttons">
            @for (residentUrl of data().residents; track $index) {
              <a [href]="residentUrl" class="link-button" appClickableUrl>
                {{ $index + 1 }}
              </a>
            }
          </div>
        </div>

        <div class="detail-section" *ngIf="data().films && data().films.length > 0">
          <h3 class="section-title">Películas</h3>
          <div class="links-buttons">
            @for (filmUrl of data().films; track $index) {
              <a [href]="filmUrl" class="link-button" appClickableUrl>
                {{ $index + 1 }}
              </a>
            }
          </div>
        </div>
      </div>
    }
  `,
  styles: [
    `
      .location-detail {
        padding: 1rem 0;
      }

      .detail-title {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        color: var(--text-color);
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

      .links-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .link-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
        height: 36px;
        padding: 0 0.75rem;
        background-color: var(--primary-color);
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 0.9rem;
        transition: all 0.2s;
        cursor: pointer;
      }

      .link-button:hover {
        background-color: var(--primary-600);
        transform: scale(1.05);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .link-button:active {
        transform: scale(0.98);
      }
    `,
  ],
})
export class LocationDetailComponent {
  data = input.required<LocationData>();
}
