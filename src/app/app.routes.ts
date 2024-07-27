import { Routes } from '@angular/router';
import { LandingComponent } from './componentes/landing/landing.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: '**',   redirectTo: '', pathMatch: 'full' },
];
