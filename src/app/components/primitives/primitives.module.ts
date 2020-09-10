import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../../app-routing.module';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {MaterialModule} from '../../material.module';

const components = [
  HeaderComponent,
  SideMenuComponent

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
    MaterialModule
  ],
  exports: components,
})
export class PrimitivesModule {
}
