import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../providers/auth.service';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'wl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private keycloakService: KeycloakService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.keycloakService.logout();
  }

  profilePage(): void {
    this.authService.goToProfilePage();
  }

}
