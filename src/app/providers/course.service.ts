import { Injectable } from '@angular/core';
import {HttpService} from './Http.service';
import {Observable} from 'rxjs';
import {CourseSubject} from './types/wl-types';

@Injectable()
export class CourseService {

  constructor(private httpService: HttpService) {
  }

  getAllCourseSubjects(): Observable<CourseSubject[]> {
    return this.httpService.get('subject/all');
  }

  getCourseSubjectById(courseID: string): Observable<CourseSubject> {
    return this.httpService.get('subject?subjectID=' + courseID);
  }

  deleteCourseSubject(courseID: string): Observable<any> {
    return this.httpService.delete('subject/delete?subjectID=' + courseID);
  }

  exportCourseSubject(courseID: string): Observable<CourseSubject> {
    return this.httpService.get('subject/export?subjectID=' + courseID);
  }
}
