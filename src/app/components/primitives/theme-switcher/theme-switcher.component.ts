import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wl-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  themeLight = 'light-theme';
  themeColor = 'magenta';
  darkThemeModeOn = false;
  constructor() { }

  ngOnInit(): void {
    this.setDefaultTheme();
  }

  setDefaultTheme(): void {
    // if theme is stored in storage - use it
    if (localStorage.getItem('pxThemeLight') && localStorage.getItem('pxThemeColor')){
      // set theme color to one from storage
      this.themeColor = localStorage.getItem('pxThemeColor');
      this.themeLight = localStorage.getItem('pxThemeLight');
      // add that class to body
      const body = document.getElementsByTagName('body')[0];
      body.classList.add(this.themeColor + this.themeLight);
    }
  }

  changeTheme(themeColorToSet, themeLightToSet): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(this.themeColor + this.themeLight);

    // switch theme
    if (this.themeColor !== themeColorToSet && themeColorToSet) {
      this.themeColor = themeColorToSet;
    }
    if (this.themeLight !== themeLightToSet && themeLightToSet) {
      this.themeLight = themeLightToSet;
    }

    body.classList.add(this.themeColor + this.themeLight);

    // save it to local storage

    localStorage.setItem('pxThemeColor', this.themeColor);
    localStorage.setItem('pxThemeLight', this.themeLight);
  }

  changeThemeLight(event): void {
    if (event.checked) {
      this.darkThemeModeOn = true;
      this.changeTheme(null, 'dark-theme');
    } else {
      this.darkThemeModeOn = false;
      this.changeTheme(null, 'light-theme');
    }
  }

  changeThemeColor(color: string): void {
    this.changeTheme(color, null);
  }
}
