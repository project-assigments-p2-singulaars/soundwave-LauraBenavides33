import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DiscoverComponent } from './discover/discover.component';
import { JoinComponent } from './join/join.component';
import { NotFoundError } from 'rxjs';

export const routes: Routes = [
    {
        path:'',
        component:MainComponent
    },
    {
        path:'discover',
        component:DiscoverComponent
    },
    {
        path:'join',
        component:JoinComponent
    },
    {
        path:'**',
        component:NotFoundError
    }
];
