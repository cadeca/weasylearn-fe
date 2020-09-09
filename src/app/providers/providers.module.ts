import {NgModule} from '@angular/core';
import {AuthGuard} from './AuthGuard.service';
import {AuthService} from './auth.service';
import {HttpService} from './Http.service';
import {CourseService} from './course.service';

@NgModule({
  imports: [
  ],
  providers: [
    HttpService,
    AuthGuard,
    AuthService,
    CourseService
  ]
})
export class ProvidersModule {
}
