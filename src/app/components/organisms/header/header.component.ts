import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../providers/auth.service';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'wl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
