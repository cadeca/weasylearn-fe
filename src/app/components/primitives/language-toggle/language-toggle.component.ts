import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'wl-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss']
})
export class LanguageToggleComponent implements OnInit {

  currentLanguage: string;
  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang;
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLanguage = lang;
    localStorage.setItem('currentLanguage', lang);
  }
}
