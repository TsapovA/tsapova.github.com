import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesWelcomeComponent } from './service-welcome/services-welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DonorModule } from "./donor/donor.module";
import { InProgressComponent } from './in-progress/in-progress.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DonorModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesWelcomeComponent,
    InProgressComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AppRoutingModule,
  ]
})
export class AppModule { }
