import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardAdminInsertCityComponent } from './board-admin-insert-city/board-admin-insert-city.component';
import { BoardAdminInsertGymComponent } from './board-admin-insert-gym/board-admin-insert-gym.component';
import { BoardAdminListUsersComponent } from './board-admin-list-users/board-admin-list-users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'insert-city', component: BoardAdminInsertCityComponent },
  { path: 'insert-gym', component: BoardAdminInsertGymComponent },
  { path: 'list-users', component: BoardAdminListUsersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }