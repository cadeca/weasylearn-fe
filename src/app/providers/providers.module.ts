import {NgModule} from '@angular/core';
import {AuthGuard} from './AuthGuard.service';
import {AuthService} from './auth.service';
import {HttpService} from './Http.service';
import {CourseService} from './course.service';
import {ModulePermissionsService} from './module-permissions.service';
import {UserService} from './user.service';

@NgModule({
  imports: [
  ],
  providers: [
    HttpService,
    AuthGuard,
    AuthService,
    CourseService,
    ModulePermissionsService,
    UserService
  ]
})
export class ProvidersModule {
}
