import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ServicesWelcomeComponent } from "./services-welcome/services-welcome.component";
import { ServiceDonorComponent } from "./service-donor/service-donor.component";

const routes: Routes = [
  { path: 'welcome', component: ServicesWelcomeComponent },
  { path: 'donors', component: ServiceDonorComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
