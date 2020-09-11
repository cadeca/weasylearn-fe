import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from '../../app-routing.module';
import {MaterialModule} from '../../material.module';
import {ThemeSwitcherComponent} from './theme-switcher/theme-switcher.component';
import {SideMenuEntryComponent} from './side-menu-entry/side-menu-entry.component';
import {TranslateModule} from '@ngx-translate/core';

const components = [
  ThemeSwitcherComponent,
  SideMenuEntryComponent
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    TranslateModule
  ],
  exports: components,
})
export class PrimitivesModule {
}
