import { Routes } from "@angular/router";
import { SpeciesList } from "./species-list/species-list";


export const SPECIES_ROUTES: Routes=[
    {
        path: '',
        component: SpeciesList
    }
]