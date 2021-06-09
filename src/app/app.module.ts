import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesWelcomeComponent } from './services-welcome/services-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesWelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
