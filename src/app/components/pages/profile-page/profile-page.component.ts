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
  changePictureRequested = false;

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getProfile().pipe(switchMap(user => {
      this.userProfile = user;
      return this.userService.getProfileImage();
    })).subscribe(image => image.text().then(content => this.userProfile.profilePicture = content));
  }

  viewProfile(): void {
    this.authService.goToProfilePage();
  }

  onImageSelected(picture: File): void {
    console.log(picture);
    if (picture) {
      this.userService.setProfileImage(picture).subscribe(image => {
        this.userProfile.profilePicture = image;
        this.changePictureRequested = false;
      });
    }

  }
}
