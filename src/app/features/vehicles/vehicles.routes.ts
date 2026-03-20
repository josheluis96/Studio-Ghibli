import { Routes } from "@angular/router";
import { VehiclesList } from "./vehicles-list/vehicles-list";


export const VEHICLES_ROUTES: Routes=[
    {
        path: '',
        component: VehiclesList
    }
]