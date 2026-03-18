import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { ModalService } from '../../../core/services/modal.service';
import { UrlResolverService } from '../../../core/services/url-resolver.service';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { LocationDetailComponent } from '../location-detail/location-detail.component';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';
import { SpeciesDetailComponent } from '../species-detail/species-detail.component';

@Component({
  selector: 'app-resource-detail',
  standalone: true,
  imports: [
    CommonModule,
    NgComponentOutlet,
    PersonDetailComponent,
    LocationDetailComponent,
    VehicleDetailComponent,
    SpeciesDetailComponent,
  ],
  template: `
    <div class="resource-detail">
      @if (modalService.isLoading()) {
        <div class="loading">Cargando...</div>
      } @else if (modalService.error()) {
        <div class="error">
          <p>{{ modalService.error() }}</p>
        </div>
      } @else if (modalService.currentData() && detailComponent()) {
        <ng-container
          [ngComponentOutlet]="detailComponent()"
          [ngComponentOutletInputs]="componentInputs()"
        ></ng-container>
      }
    </div>
  `,
  styles: [
    `
      .resource-detail {
        padding: 1.5rem;
      }

      .loading {
        text-align: center;
        padding: 2rem;
        color: var(--text-color-secondary);
      }

      .error {
        padding: 1rem;
        background-color: var(--red-50);
        border: 1px solid var(--red-200);
        border-radius: 6px;
        color: var(--red-700);
      }
    `,
  ],
})
export class ResourceDetailComponent {
  protected readonly modalService = inject(ModalService);
  private readonly urlResolverService = inject(UrlResolverService);

  protected readonly detailComponent = computed(() => {
    const resourceType = this.modalService.resourceType();
    switch (resourceType) {
      case 'person':
        return PersonDetailComponent as any;
      case 'location':
        return LocationDetailComponent as any;
      case 'vehicle':
        return VehicleDetailComponent as any;
      case 'species':
        return SpeciesDetailComponent as any;
      default:
        return null;
    }
  });

  protected readonly componentInputs = computed(() => {
    const data = this.modalService.currentData();
    return { data } as Record<string, any>;
  });

  constructor() {
    effect(() => {
      const url = this.modalService.currentUrl();
      if (!url) return;

      this.urlResolverService.resolveUrl(url).subscribe({
        next: (data) => {
          this.modalService.setData(data);
        },
        error: (error) => {
          this.modalService.setError('No se pudieron cargar los detalles');
          console.error(error);
        },
      });
    });
  }
}
