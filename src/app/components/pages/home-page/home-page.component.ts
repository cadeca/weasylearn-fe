import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'wl-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private router: Router) { }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
