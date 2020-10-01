import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CourseService} from '../../../providers/course.service';
import {CourseSubject} from '../../../providers/types/wl-types';
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
          this.retrieveEditPermissions(subjectId);
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
      this.editPermissions = feedback;
    });
  }

  editSubject(): void {

  }
}
