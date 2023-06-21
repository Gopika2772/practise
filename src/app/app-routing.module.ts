import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { UpdateComponent } from './pages/update/update.component';
import { AllusersComponent } from './pages/allusers/allusers.component';
import { RootComponent } from './pages/root/root.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "update",
    component: UpdateComponent
  },
  {
    path: "allusers",
    component: AllusersComponent
  },
  {
    path: "",
    component: RootComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
