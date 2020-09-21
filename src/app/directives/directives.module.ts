import {NgModule} from '@angular/core';
import {ProvidersModule} from '../providers/providers.module';
import {RoleCheckDirective} from './role-check.directive';

const directives = [
  RoleCheckDirective
];
@NgModule({
  declarations: directives,
  imports: [
    ProvidersModule
  ],
  exports: directives,
})
export class DirectivesModule {
}
