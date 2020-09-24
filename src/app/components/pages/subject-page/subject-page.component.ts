import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CourseService} from '../../../providers/course.service';
import {CourseSubject} from '../../../providers/types/wl-types';

@Component({
  selector: 'wl-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss']
})
export class SubjectPageComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  subject: CourseSubject;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        const subjectId = params.subjectId || undefined;
        console.log(params);
        if (subjectId) {
          console.log(subjectId);
          this.retrieveSubjectData(subjectId);
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

  addOrEditSubject(subject): void {
    if (subject) {
      this.courseService.saveCourseSubject(subject).subscribe(() => {
        this.router.navigate(['/home/subjects']);
      });
    } else {
      this.router.navigate(['/home/subjects']);
    }
  }
}
