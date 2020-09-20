import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {AuthService} from '../../../providers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'wl-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss']
})
export class UserProfileMenuComponent implements OnInit {

  username: string;
  image: File = null;
  constructor(private keycloakService: KeycloakService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.username = this.authService.getUserName();
  }

  logout(): void {
    this.keycloakService.logout();
  }

  profilePage(): void {
    this.router.navigate(['/home/profile']);
  }
}
