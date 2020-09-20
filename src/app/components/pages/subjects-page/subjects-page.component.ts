import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../providers/course.service';
import {CourseSubject} from '../../../providers/types/wl-types';
import {MatDialog} from '@angular/material/dialog';
import {CreateSubjectDialogComponent} from '../../organisms/create-subject-dialog/create-subject-dialog.component';

@Component({
  selector: 'wl-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss']
})
export class SubjectsPageComponent implements OnInit {
  subjects: CourseSubject[];
  searchField: string;

  constructor(private courseService: CourseService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllSubjects();
  }

  addSubject(): void {
    const dialogRef = this.dialog.open(CreateSubjectDialogComponent);

    dialogRef.componentInstance.createSubject.subscribe(subject => {
      if (subject) {
        this.courseService.saveCourseSubject(subject).subscribe(() => {
          this.getAllSubjects();
        });
      }
    });
  }

  private getAllSubjects(): void {
    this.courseService.getAllCourseSubjects().subscribe(value => {
      this.subjects = value;
    });
  }

}
