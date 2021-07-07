import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ServicesWelcomeComponent } from "./services-welcome/services-welcome.component";
import { DonorWelcomeComponent } from "./donor/donor-welcome/donor-welcome.component";
import {InProgressComponent} from "./in-progress/in-progress.component";

const routes: Routes = [
  { path: 'welcome', component: ServicesWelcomeComponent },
  {
    path: 'donors',
    component: DonorWelcomeComponent,
    loadChildren: () => import('./donor/donor.module').then(mod => mod.DonorModule)
  },
  { path: 'in-progress', component: InProgressComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
