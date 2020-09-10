import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './providers/AuthGuard.service';
import {DashboardPageComponent} from './components/pages/dashboard-page/dashboard-page.component';
import {SubjectsPageComponent} from './components/pages/subjects-page/subjects-page.component';
import {ThemeTestPageComponent} from './components/pages/theme-test-page/theme-test-page.component';

const routes: Routes = [
  { path: 'home', component: DashboardPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'subjects', component: SubjectsPageComponent },
      { path: 'theme', component: ThemeTestPageComponent },
    ]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
