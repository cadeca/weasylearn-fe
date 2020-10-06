import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../providers/user.service';

@Component({
  selector: 'wl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getProfile();
  }
}
