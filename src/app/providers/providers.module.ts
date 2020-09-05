import {NgModule} from '@angular/core';
import {AuthGuard} from './AuthGuard.service';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class ProvidersModule {
}
