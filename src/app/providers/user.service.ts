import {Injectable} from '@angular/core';
import {HttpService} from './Http.service';
import {Observable} from 'rxjs';
import {Teacher, User} from './types/wl-types';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) {
  }

  getProfile(): Observable<User> {
    return this.httpService.get('user/profile');
  }

  getProfileImage(): Observable<Blob> {
    return this.httpService.get('user/profile/image', {responseType: 'blob' as 'json'});
  }

  setProfileImage(file: File): Observable<any> {
    const data = new FormData();
    data.append('file', file, file.name);
    return this.httpService.post('user/profile/image', data);
  }

  getTeachers(): Observable<Teacher[]> {
    return this.httpService.get('user/teachers');
  }

  getStudents(): Observable<Teacher[]> {
    return this.httpService.get('user/students');
  }

  searchUsers(query: string, type: string): Observable<User[]> {
    return this.httpService.get(`user/search?query=${query}&type=${type}`);
  }
}
