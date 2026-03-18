import { Directive, HostListener, inject } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';
import { UrlResolverService } from '../../core/services/url-resolver.service';

@Directive({
  selector: '[appClickableUrl]',
  standalone: true,
  host: {
    style: 'cursor: pointer;',
  },
})
export class ClickableUrlDirective {
  private readonly modalService = inject(ModalService);
  private readonly urlResolverService = inject(UrlResolverService);

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    const target = event.target as HTMLAnchorElement;
    const url = target.getAttribute('href');

    console.log('Clicked URL:', url);

    if (!url) {
      console.warn('No URL found');
      return;
    }

    const resourceType = this.urlResolverService.getResourceType(url);
    console.log('Resource type:', resourceType);
    
    if (!resourceType) {
      console.warn('Could not determine resource type for URL:', url);
      return;
    }

    console.log('Opening modal for:', resourceType, 'URL:', url);
    this.modalService.openModal(url, resourceType);
  }
}
