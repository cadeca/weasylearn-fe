import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../providers/auth.service';
import {UserService} from '../../../providers/user.service';
import {User} from '../../../providers/types/wl-types';

@Component({
  selector: 'wl-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  userProfile: User;
  profileImage: File;

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getProfile().subscribe(userProfile => {
      this.userProfile = userProfile;
    });
    this.userService.getProfileImage().subscribe(image => {
      this.profileImage = image;
    });
  }

  viewProfile(): void {
    this.authService.goToProfilePage();
  }

  onImageSelected(files: File[]): void {
    if (files && files[0]) {
      this.userService.setProfileImage(files[0]).subscribe(image => {
        this.profileImage = image;
      });
    }

  }
}
