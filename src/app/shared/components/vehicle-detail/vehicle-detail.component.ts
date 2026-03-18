import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../../core/models/vehicle.model';
import { ClickableUrlDirective } from '../../directives/clickable-url.directive';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [CommonModule, ClickableUrlDirective],
  template: `
    @if (data()) {
      <div class="vehicle-detail">
        <h2 class="detail-title">{{ data().name }}</h2>

        <div class="detail-section">
          <div class="detail-row">
            <span class="label">Descripción:</span>
            <span class="value">{{ data().description || 'N/A' }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Clase:</span>
            <span class="value">{{ data().vehicle_class || 'N/A' }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Largo:</span>
            <span class="value">{{ data().length || 'N/A' }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Piloto:</span>
            <span class="value">{{ data().pilot || 'N/A' }}</span>
          </div>
        </div>

        <div class="detail-section" *ngIf="data().films && data().films.length > 0">
          <h3 class="section-title">Películas</h3>
          <div class="links-list">
            @for (filmUrl of data().films; track $index) {
              <a [href]="filmUrl" target="_blank" rel="noopener" class="url-link" appClickableUrl>
                {{ filmUrl }}
              </a>
            }
          </div>
        </div>
      </div>
    }
  `,
  styles: [
    `
      .vehicle-detail {
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
        cursor: pointer;
      }

      .url-link:hover {
        background-color: var(--primary-50);
        text-decoration: underline;
      }
    `,
  ],
})
export class VehicleDetailComponent {
  data = input.required<Vehicle>();
}
