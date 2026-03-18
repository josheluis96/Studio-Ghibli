import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

export type ResourceType = 'person' | 'location' | 'vehicle' | 'species';

export interface ResolvedResource {
  type: ResourceType;
  data: unknown;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class UrlResolverService {
  private readonly http = inject(HttpClient);
  private readonly cache = new Map<string, Observable<unknown>>();
  private readonly baseUrl = 'https://ghibliapi.vercel.app';

  resolveUrl(url: string): Observable<unknown> {
    // Return cached result if available
    if (this.cache.has(url)) {
      console.log('Using cached result for:', url);
      return this.cache.get(url)!;
    }

    const resourceType = this.getResourceType(url);
    const id = this.extractIdFromUrl(url);

    console.log('Resolving URL:', url, 'Type:', resourceType, 'ID:', id);

    if (!resourceType || !id) {
      console.error('Invalid URL format:', url);
      return throwError(() => new Error('Invalid URL format'));
    }

    const endpoint = `${this.baseUrl}/${resourceType}/${id}`;
    console.log('Calling endpoint:', endpoint);

    const request$ = this.http.get<unknown>(endpoint).pipe(
      catchError((error) => {
        console.error(`Failed to resolve ${resourceType}:`, error);
        return throwError(() => new Error(`Failed to load ${resourceType} details`));
      }),
      shareReplay(1)
    );

    this.cache.set(url, request$);

    return request$;
  }

  getResourceType(url: string): ResourceType | null {
    const resourceMatch = url.match(/\/(people|locations|vehicles|species)\//);
    if (!resourceMatch) return null;

    const type = resourceMatch[1];
    switch (type) {
      case 'people':
        return 'person';
      case 'locations':
        return 'location';
      case 'vehicles':
        return 'vehicle';
      case 'species':
        return 'species';
      default:
        return null;
    }
  }

  extractIdFromUrl(url: string): string | null {
    const idMatch = url.match(/\/([a-f0-9\-]+)$/);
    return idMatch ? idMatch[1] : null;
  }
}
