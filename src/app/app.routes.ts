import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'films', pathMatch: 'full' },
    {
        path: 'films',
        loadChildren: () => import('./features/films/films.routes').then(m => m.FILMS_ROUTES)
    },
    {
        path: 'people',
        loadChildren: () => import('./features/people/people.routes').then(m => m.PEOPLE_ROUTES)
    },
    {
        path: 'locations',
        loadChildren: () => import('./features/locations/locations.routes').then(m => m.LOCATIONS_ROUTES)
    },
    {
        path: 'species',
        loadChildren: () => import('./features/species/species.routes').then(m => m.SPECIES_ROUTES)
    },
    {
        path: 'vehicles',
        loadChildren: () => import('./features/vehicles/vehicles.routes').then(m => m.VEHICLES_ROUTES)
    },
    { path: '**', component: NotFoundComponent }
];
