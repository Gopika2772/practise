import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { UpdateComponent } from './pages/update/update.component';
import { AllusersComponent } from './pages/allusers/allusers.component';
import { RootComponent } from './pages/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UpdateComponent,
    AllusersComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
