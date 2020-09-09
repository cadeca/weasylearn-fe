import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../providers/course.service';

@Component({
  selector: 'wl-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss']
})
export class SubjectsPageComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.getAllCourseSubjects().subscribe(value => {
    //   console.log(value);
    // });
  }

}
