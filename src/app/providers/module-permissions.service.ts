import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {HttpService} from './Http.service';

@Injectable()
export class ModulePermissionsService {

  private userPermissions: string[] = [];
  private sideMenuEntries = [
    {
      code: 'subjects',
      route: 'subjects',
      icon: 'library_books',
      whitelistedRoles: ['admin', 'teacher', 'student', 'developer'],
    },
    {
      code: 'questionBank',
      route: 'question-bank',
      icon: 'file_copy',
      whitelistedRoles: ['admin', 'teacher', 'developer'],
    },
    {
      code: 'testTemplates',
      route: 'test-templates',
      icon: 'donut_small',
      whitelistedRoles: ['admin', 'teacher', 'developer'],
    },
    {
      code: 'createTest',
      route: 'create-rest',
      icon: 'title',
      whitelistedRoles: ['admin', 'teacher', 'developer'],
    },
    {
      code: 'grading',
      route: 'grading',
      icon: 'grading',
      whitelistedRoles: ['admin', 'teacher', 'student', 'developer'],
    },
    {
      code: 'startTest',
      route: 'startTest',
      icon: 'title',
      whitelistedRoles: ['student', 'developer'],
    }
  ];
  constructor(private authService: AuthService, private httpService: HttpService) {
    this.userPermissions = authService.getUserRoles();
  }

  getWhitelistedSidebarEntries(): any {
    const partialSideBarEntries = this.sideMenuEntries.filter(entry => this.compareWhitelistedRolesArrays(entry.whitelistedRoles));
    return [...partialSideBarEntries];
  }

  isElementWhitelisted(elementRoles): boolean {
    return this.compareWhitelistedRolesArrays(elementRoles);
  }

  private compareWhitelistedRolesArrays(whitelistedRoles: string[]): boolean {
    return this.userPermissions.some(r => whitelistedRoles.indexOf(r.toLowerCase()) >= 0);
  }

  getUserPermissionsForSubject(subjectId: string): Observable<any> {
    return this.httpService.get(`subject/isEditable/${subjectId}`);
  }
}
