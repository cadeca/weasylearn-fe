import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../providers/auth.service';
import {UserService} from '../../../providers/user.service';
import {User} from '../../../providers/types/wl-types';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'wl-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  userProfile: User;
  profilePicture = '';

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.retrieveProfile();
  }

  viewProfile(): void {
    this.authService.goToProfilePage();
  }

  getProfilePicture(): void {
    this.userService.getProfileImage().subscribe(img => {
      img.text().then(content => this.profilePicture = content);
    });
  }

  onImageSelected(picture: File): void {
    if (picture) {
      this.userService.setProfileImage(picture).subscribe(image => {
        this.getProfilePicture();
      });
    }

  }

  infoChange(code: string, value: any): void {
    const newUserProfile: any = {...this.userProfile};
    newUserProfile[code] = value;
    this.userService.setProfile(newUserProfile).subscribe(() => {
      this.retrieveProfile();
    });
  }

  private retrieveProfile(): void {
    this.userService.getProfile().subscribe(profile => {
      this.userProfile = profile;
    });
    this.getProfilePicture();
  }
}
