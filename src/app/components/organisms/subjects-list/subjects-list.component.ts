import {Component, Input, OnInit} from '@angular/core';
import {CourseSubject} from '../../../providers/types/wl-types';

@Component({
  selector: 'wl-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {
  visibleSubjects: CourseSubject[] = [];
  private allSubjects: CourseSubject[] = [];


  @Input()
  set subjects(subjects: CourseSubject[]) {
    if (subjects) {
      this.visibleSubjects = [...subjects];
      this.allSubjects = [...subjects];
    }
  }

  @Input()
  set searchField(searchField: string) {
    if (searchField) {
      this.visibleSubjects = this.allSubjects.filter(subject => {
        return subject.name.toLowerCase().includes(searchField.toLowerCase()) ||
          subject.code.toLowerCase().includes(searchField.toLowerCase()) ||
          subject.description.toLowerCase().includes(searchField.toLowerCase()) ||
          +subject.semester === +searchField;
      });
    } else {
      this.visibleSubjects = this.allSubjects;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
