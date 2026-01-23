import { Routes } from "@angular/router";
import { LocationsList } from "./locations-list/locations-list";


export const LOCATIONS_ROUTES: Routes=[
    {
        path: '',
        component: LocationsList
    }
]