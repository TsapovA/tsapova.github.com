import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesWelcomeComponent } from './services-welcome/services-welcome.component';
import { ServiceDonorComponent } from './service-donor/service-donor.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesWelcomeComponent,
    ServiceDonorComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ AppRoutingModule ]
})
export class AppModule { }
