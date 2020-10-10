import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../material.module';
import {ThemeSwitcherComponent} from './theme-switcher/theme-switcher.component';
import {TranslateModule} from '@ngx-translate/core';
import {SideMenuEntryComponent} from './side-menu-entry/side-menu-entry.component';
import {FileUploaderComponent} from './file-uploader/file-uploader.component';
import {LanguageToggleComponent} from './language-toggle/language-toggle.component';
import {UserProfileMenuComponent} from './user-profile-menu/user-profile-menu.component';
import {UserChipListComponent} from './user-chip-list/user-chip-list.component';
import {EditableLabelValueEntryComponent} from './editable-label-value-entry/editable-label-value-entry.component';
import {ImageCropperModule} from 'ngx-image-cropper';
import {ImageUploaderComponent} from './image-uploader/image-uploader.component';

const components = [
  ThemeSwitcherComponent,
  SideMenuEntryComponent,
  FileUploaderComponent,
  LanguageToggleComponent,
  UserProfileMenuComponent,
  UserChipListComponent,
  EditableLabelValueEntryComponent
  UserProfileMenuComponent,
  ImageUploaderComponent
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
    MaterialModule,
    TranslateModule,
    ImageCropperModule
  ],
  exports: components,
})
export class PrimitivesModule {
}
