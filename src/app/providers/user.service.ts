import {Injectable} from '@angular/core';
import {HttpService} from './Http.service';
import {Observable} from 'rxjs';
import {User} from './types/wl-types';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) {
  }

  getProfile(): Observable<User> {
    return this.httpService.get('user/profile');
  }

  getProfileImage(): Observable<File> {
    return this.httpService.get('user/profile/image');
  }

  setProfileImage(file): Observable<any> {
    return this.httpService.post('user/profile/image', file);
  }


}
