import { Component, inject } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ModalService } from '../../../core/services/modal.service';
import { ResourceDetailComponent } from '../resource-detail/resource-detail.component';

@Component({
  selector: 'app-resource-modal',
  standalone: true,
  imports: [DialogModule, ResourceDetailComponent],
  template: `
    <p-dialog
      [(visible)]="isOpen"
      [header]="getModalTitle()"
      [modal]="true"
      [style]="{ width: '50vw' }"
      [breakpoints]="{ '960px': '75vw', '640px': '90vw' }"
      (onHide)="closeModal()"
    >
      <app-resource-detail></app-resource-detail>
    </p-dialog>
  `,
})
export class ResourceModalComponent {
  protected readonly modalService = inject(ModalService);

  get isOpen(): boolean {
    return this.modalService.isModalOpen();
  }

  set isOpen(value: boolean) {
    if (!value) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  getModalTitle(): string {
    const resourceType = this.modalService.resourceType();
    const titles: Record<string, string> = {
      person: 'Detalles de Persona',
      location: 'Detalles de Ubicación',
      vehicle: 'Detalles de Vehículo',
      species: 'Detalles de Especie',
    };
    return titles[resourceType || ''] || 'Detalles';
  }
}
