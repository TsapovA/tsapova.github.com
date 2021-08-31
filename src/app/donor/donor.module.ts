import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorWelcomeComponent } from "./donor-welcome/donor-welcome.component";
import { DonorRoutingModule } from "./donor-routing.module";
import { DonorNewComponent } from './donor-new/donor-new.component';
import { DonorSearchComponent } from './donor-search/donor-search.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DonorQuickComponent } from './donor-quick/donor-quick.component';

@NgModule({
  declarations: [ DonorWelcomeComponent, DonorNewComponent, DonorSearchComponent, DonorQuickComponent ],
  imports: [CommonModule, DonorRoutingModule, ReactiveFormsModule]
})
export class DonorModule { }
