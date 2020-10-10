import {NgModule} from '@angular/core';
import {PagesModule} from './pages/pages.module';
import {OrganismsModule} from './organisms/organisms.module';
import {PrimitivesModule} from './primitives/primitives.module';
import {ProvidersModule} from '../providers/providers.module';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    ProvidersModule,
    MaterialModule,
    PagesModule,
    OrganismsModule,
    PrimitivesModule
  ],
  exports: [
    PagesModule,
    OrganismsModule,
    PrimitivesModule
  ],
  declarations: [],
})
export class ComponentsModule {
}
