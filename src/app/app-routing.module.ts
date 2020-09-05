import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {AuthGuard} from './providers/AuthGuard.service';
import {DashboardPageComponent} from './components/pages/dashboard-page/dashboard-page.component';
import {SubjectsPageComponent} from './components/pages/subjects-page/subjects-page.component';

const routes: Routes = [
  // { path: 'login', component: LoginPageComponent },
  // { path: 'register', component: RegisterPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'dashboard', component: DashboardPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'subjects', component: SubjectsPageComponent },
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
