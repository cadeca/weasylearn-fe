import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CourseService} from '../../../providers/course.service';
import {CourseSubject} from '../../../providers/types/wl-types';
import {Roles} from '../../../directives/roles';
import {ModulePermissionsService} from '../../../providers/module-permissions.service';

@Component({
  selector: 'wl-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss']
})
export class SubjectPageComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  subject: CourseSubject;
  editPermissions: boolean;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router,
    private modulePermissionsService: ModulePermissionsService) {
  }

  ngOnInit(): void {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        const subjectId = params.subjectId || undefined;
        if (subjectId) {
          this.retrieveSubjectData(subjectId);
          if (this.modulePermissionsService.isElementWhitelisted([Roles.ADMIN, Roles.TEACHER, Roles.DEV])) {
            // TODO remove
            this.editPermissions = true;
            this.retrieveEditPermissions(subjectId);
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private retrieveSubjectData(subjectCode): void {
    this.courseService.getCourseSubjectById(subjectCode).subscribe(subject => {
      this.subject = subject;
    });
  }

  save(subject): void {
    if (subject) {
      this.courseService.saveCourseSubject(subject).subscribe(() => {
        this.router.navigate(['/home/subjects']);
      });
    } else {
      this.router.navigate(['/home/subjects']);
    }
  }

  private retrieveEditPermissions(subjectId: any): void {
    this.modulePermissionsService.getUserPermissionsForSubject(subjectId).subscribe(feedback => {
      // TODO update these from response
      this.editPermissions = true;
    });
  }

  editSubject(): void {

  }
}
