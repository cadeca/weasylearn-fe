import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {AuthService} from '../../../providers/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../../providers/user.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'wl-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss']
})
export class UserProfileMenuComponent implements OnInit {

  username: string;
  image: any = '';

  constructor(private keycloakService: KeycloakService,
              private authService: AuthService,
              private userService: UserService,
              private sanitizer: DomSanitizer,
              private router: Router) {
  }

  ngOnInit(): void {
    this.username = this.authService.getUserName();
    this.requestImage();
    this.userService.profileImageChange.subscribe(change => {
      this.requestImage();
    });
  }


  logout(): void {
    this.keycloakService.logout();
  }

  profilePage(): void {
    this.router.navigate(['/home/profile']);
  }

  private requestImage(): void {
    this.userService.getProfileImage().subscribe(img => {
      img.text().then(content => this.image = content);
    });
  }
}
