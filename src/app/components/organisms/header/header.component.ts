import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../providers/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'wl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getProfile();
  }

  goToHomepage(): void {
    this.router.navigate(['/']);
  }
}
