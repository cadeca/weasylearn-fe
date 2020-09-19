import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../providers/auth.service';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'wl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  image: File = null;
  currentLanguage: string;
  constructor(private keycloakService: KeycloakService,
              private authService: AuthService,
              private router: Router,
              private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.username = this.authService.getUserName();
    this.currentLanguage = this.translate.currentLang;
  }

  logout(): void {
    this.keycloakService.logout();
  }

  profilePage(): void {
    this.router.navigate(['/home/profile']);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLanguage = lang;
  }
}
