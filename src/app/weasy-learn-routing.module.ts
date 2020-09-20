import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './providers/AuthGuard.service';
import {DashboardPageComponent} from './components/pages/dashboard-page/dashboard-page.component';
import {SubjectsPageComponent} from './components/pages/subjects-page/subjects-page.component';
import {ThemeTestPageComponent} from './components/pages/theme-test-page/theme-test-page.component';
import {ProfilePageComponent} from './components/pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: 'home', component: DashboardPageComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'subjects', component: SubjectsPageComponent, data: {roles: ['app-admin', 'app-teacher']}},
      {path: 'profile', component: ProfilePageComponent, data: {roles: ['app-admin', 'app-teacher', 'app-student']}},
      {path: 'theme', component: ThemeTestPageComponent, canActivate: [AuthGuard], data: {roles: ['app-developer']}},
    ]
  },
  {path: '**', redirectTo: '/home/subjects', pathMatch: 'full'},
  {path: '', redirectTo: '/home/subjects', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WeasyLearnRoutingModule {
}
