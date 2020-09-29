import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './providers/AuthGuard.service';
import {DashboardPageComponent} from './components/pages/dashboard-page/dashboard-page.component';
import {SubjectsPageComponent} from './components/pages/subjects-page/subjects-page.component';
import {ThemeTestPageComponent} from './components/pages/theme-test-page/theme-test-page.component';
import {ProfilePageComponent} from './components/pages/profile-page/profile-page.component';
import {SubjectPageComponent} from './components/pages/subject-page/subject-page.component';
import {CreateSubjectPageComponent} from './components/pages/create-subject-page/create-subject-page.component';

const routes: Routes = [
  {
    path: 'home', component: DashboardPageComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'create-subject', component: CreateSubjectPageComponent, data: {roles: ['admin']}},
      {path: 'view-subject', component: SubjectPageComponent, data: {roles: ['admin', 'teacher', 'developer']}},
      {path: 'subjects', component: SubjectsPageComponent, data: {roles: ['admin', 'teacher', 'student', 'developer']}},
      {path: 'profile', component: ProfilePageComponent, data: {roles: ['admin', 'teacher', 'student', 'developer']}},
      {path: 'theme', component: ThemeTestPageComponent, data: {roles: ['developer']}},
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
