import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PrimitivesModule} from '../primitives/primitives.module';
import {RouterModule} from '@angular/router';
import {SubjectsPageComponent} from './subjects-page/subjects-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {TranslateModule} from '@ngx-translate/core';
import {ProvidersModule} from '../../providers/providers.module';
import {MaterialModule} from '../../material.module';
import {ThemeTestPageComponent} from './theme-test-page/theme-test-page.component';
import {OrganismsModule} from '../organisms/organisms.module';

const components = [
  SubjectsPageComponent,
  DashboardPageComponent,
  ThemeTestPageComponent
];

@NgModule({
  declarations: components,
  imports: [
    ProvidersModule,
    OrganismsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PrimitivesModule,
    RouterModule,
    TranslateModule,
    MaterialModule
  ],
  exports: components,
})
export class PagesModule {
}
