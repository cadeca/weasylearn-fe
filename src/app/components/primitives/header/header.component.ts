import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {AuthService} from '../../../providers/auth.service';

@Component({
  selector: 'wl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  // let's define default theme
  themeColor = 'light-theme';

  constructor(private keycloakService: KeycloakService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.setDefaultTheme();
    console.log(this.authService.getUserRoles());
  }

  setDefaultTheme(): void {
    // if theme is stored in storage - use it
    if (localStorage.getItem('pxTheme')) {
      // set theme color to one from storage
      this.themeColor = localStorage.getItem('pxTheme');
      // add that class to body
      const body = document.getElementsByTagName('body')[0];
      body.classList.add(this.themeColor);
    }
  }

  changeTheme(themeToSet): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(this.themeColor);

    // switch theme
    if (this.themeColor !== themeToSet) {
      this.themeColor = themeToSet;
    }

    body.classList.add(this.themeColor);

    // save it to local storage

    localStorage.setItem('pxTheme', this.themeColor);
  }

  logout(): void {
    this.keycloakService.logout();
  }

  profilePage(): void {
    this.authService.goToProfilePage();
  }
}
