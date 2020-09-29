import {Component, Input} from '@angular/core';
import {CourseSubject} from '../../../providers/types/wl-types';
import {Router} from '@angular/router';
import {Roles} from '../../../directives/roles';

@Component({
  selector: 'wl-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent {
  visibleSubjects: CourseSubject[] = [];
  private allSubjects: CourseSubject[] = [];
  roles = Roles;


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

  constructor(private router: Router) { }

  editSubject(subject: CourseSubject): void {
    this.router.navigate(['/home/view-subject'], { queryParams: { subjectId: subject.id } });
  }
}
