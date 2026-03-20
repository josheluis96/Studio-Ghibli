import { Routes } from "@angular/router";
import { PeopleList } from "./people-list/people-list";


export const PEOPLE_ROUTES: Routes=[
    {
        path: '',
        component: PeopleList
    }
]