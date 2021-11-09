import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BusComponent } from './bus/bus.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsInputComponent } from './user-details-input/user-details-input.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MgsComponent } from './mgs/mgs.component';
import { ClientComponent } from './mgs/client/client.component';
import { OrganizerComponent } from './mgs/organizer/organizer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusComponent,
    LoginComponent,
    HeaderComponent,
    UserDetailsInputComponent,
    LifecycleComponent,
    MgsComponent,
    ClientComponent,
    OrganizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
