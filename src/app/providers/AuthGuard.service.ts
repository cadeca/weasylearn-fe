// import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  // constructor(private router: Router, private authService: AuthService) { }
  // tslint:disable-next-line:typedef
  canActivate() {
    // if ( this.authService.currentUser() ) {
    //   return true;
    // }
    // this.router.navigate(['/login']);
    return true;
  }
}
