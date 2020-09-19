import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'wl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('currentLanguage');
    if (savedLanguage) {
      translate.setDefaultLang(savedLanguage);
      translate.use(savedLanguage);
    } else {
      translate.setDefaultLang('ro');
      translate.use('ro');
      localStorage.setItem('currentLanguage', 'ro');
    }
  }
}
