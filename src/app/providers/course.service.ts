import {Injectable} from '@angular/core';
import {HttpService} from './Http.service';
import {Observable} from 'rxjs';
import {CourseSubject} from './types/wl-types';

@Injectable()
export class CourseService {

  constructor(private httpService: HttpService) {
  }

  getAllCourseSubjects(): Observable<CourseSubject[]> {
    return this.httpService.get('subject');
  }

  getCourseSubjectById(courseID: string): Observable<CourseSubject> {
    console.log(`subject/${courseID}`);
    return this.httpService.get(`subject/${courseID}`);
  }

  deleteCourseSubject(courseID: string): Observable<any> {
    return this.httpService.delete(`subject?id=${courseID}`);
  }

  exportCourseSubject(courseID: string): Observable<CourseSubject> {
    return this.httpService.get(`subject/export?id=${courseID}`);
  }

  saveCourseSubject(subject: CourseSubject): Observable<any> {
    return this.httpService.post('subject', subject);
  }
}
