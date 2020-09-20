import { Component, OnInit } from '@angular/core';

const DARK_THEME = 'dark-theme';
const LIGHT_THEME = 'light-theme';
const ORANGE_COLOR = 'orange-';

@Component({
  selector: 'wl-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  themeLight = LIGHT_THEME;
  themeColor = ORANGE_COLOR;
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
      this.darkThemeModeOn = this.themeLight === DARK_THEME;
    } else {
      this.changeTheme(this.themeColor, this.themeLight);
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
    this.darkThemeModeOn = this.themeLight === DARK_THEME;

    localStorage.setItem('pxThemeColor', this.themeColor);
    localStorage.setItem('pxThemeLight', this.themeLight);
  }

  changeThemeLight(event): void {
    if (event.checked) {
      this.changeTheme(null, DARK_THEME);
    } else {
      this.changeTheme(null, LIGHT_THEME);
    }
  }

  changeThemeColor(color: string): void {
    this.changeTheme(color, null);
  }
}
