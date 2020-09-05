import {NgModule} from '@angular/core';
import {PagesModule} from './pages/pages.module';
import {OrganismsModule} from './organisms/organisms.module';
import {PrimitivesModule} from './primitives/primitives.module';

@NgModule({
  imports: [
    PagesModule,
    OrganismsModule,
    PrimitivesModule
  ],
  exports: [
    PagesModule,
    OrganismsModule,
    PrimitivesModule
  ],
})
export class ComponentsModule {
}
