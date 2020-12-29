import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationComponent } from './components/application/application.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import { CurrencyService } from './core/services/currency/currency.service';

@NgModule({
  declarations: [
    ApplicationComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    CurrencyService
  ],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
