import { Injectable, signal } from '@angular/core';
import { ResourceType } from './url-resolver.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  readonly isModalOpen = signal<boolean>(false);
  readonly currentUrl = signal<string>('');
  readonly currentData = signal<unknown>(null);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);
  readonly resourceType = signal<ResourceType | null>(null);

  openModal(url: string, resourceType: ResourceType): void {
    this.currentUrl.set(url);
    this.resourceType.set(resourceType);
    this.isModalOpen.set(true);
    this.isLoading.set(true);
    this.error.set(null);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.currentUrl.set('');
    this.currentData.set(null);
    this.error.set(null);
    this.resourceType.set(null);
  }

  setLoading(loading: boolean): void {
    this.isLoading.set(loading);
  }

  setData(data: unknown): void {
    this.currentData.set(data);
    this.isLoading.set(false);
  }

  setError(error: string): void {
    this.error.set(error);
    this.isLoading.set(false);
  }
}
