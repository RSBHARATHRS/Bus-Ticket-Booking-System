import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BusComponent } from './bus/bus.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsInputComponent } from './user-details-input/user-details-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusComponent,
    LoginComponent,
    HeaderComponent,
    UserDetailsInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
