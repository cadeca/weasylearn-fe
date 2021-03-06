import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../providers/course.service';
import {CourseSubject} from '../../../providers/types/wl-types';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Roles} from '../../../directives/roles';

@Component({
  selector: 'wl-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss']
})
export class SubjectsPageComponent implements OnInit {
  subjects: CourseSubject[];
  searchField: string;
  roles = Roles;

  constructor(private courseService: CourseService, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllSubjects();
  }

  addSubject(): void {
    this.router.navigate(['/home/create-subject']);
  }

  private getAllSubjects(): void {
    this.courseService.getAllCourseSubjects().subscribe(value => {
      this.subjects = value;
    });
  }

}
