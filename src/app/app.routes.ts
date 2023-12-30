import { Routes } from '@angular/router';
import { OnboardGsComponent } from './Pages/onboard-gs/onboard-gs.component';
import { OnboardCaComponent } from './Pages/onboard-ca/onboard-ca.component';
import { OnboardAsComponent } from './Pages/onboard-as/onboard-as.component';
import { OnboardPComponent } from './Pages/onboard-p/onboard-p.component';

export const routes: Routes = [
    {path: '', component: OnboardGsComponent},
    {path: 'get-started', redirectTo: '', pathMatch: 'full'},
    {path: 'create-account', component: OnboardCaComponent},
    {path: 'account-setup', component: OnboardAsComponent},
    {path: 'payment', component: OnboardPComponent},
];
