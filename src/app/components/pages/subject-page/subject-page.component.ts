import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CourseService} from '../../../providers/course.service';
import {CourseSubject, User} from '../../../providers/types/wl-types';
import {ModulePermissionsService} from '../../../providers/module-permissions.service';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {UserService} from '../../../providers/user.service';

@Component({
  selector: 'wl-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss']
})
export class SubjectPageComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  subject: CourseSubject;
  editPermissions: boolean;
  addStudentsInputVisible = false;
  addTutorsInputVisible = false;
  private studentsToAdd: string[];
  private tutorsToAdd: string[];
  selectedTeacher: User;
  teachers: User[];
  addTeacherInputVisible: boolean;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router,
    private modulePermissionsService: ModulePermissionsService,
    private userService: UserService) {
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
      this.selectedTeacher = this.subject.teacher;
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

  removeTutor(tutor: string): void {
    this.courseService.removeTutor(this.subject.id, tutor).subscribe(() => {
      this.retrieveSubjectData(this.subject.id);
    });
  }

  removeStudent(student: string): void {
    this.courseService.removeStudent(this.subject.id, student).subscribe(() => {
      this.retrieveSubjectData(this.subject.id);
    });
  }

  infoChange(code: string, value: any): void {
    const newSubject: any = {...this.subject};
    newSubject[code] = value;
    newSubject.teacher = newSubject.teacher.username;
    newSubject.tutors = newSubject.tutors.map(tutor => tutor.username);
    newSubject.students = newSubject.students.map(student => student.username);
    this.courseService.saveCourseSubject(newSubject).subscribe(() => {
      this.retrieveSubjectData(this.subject.id);
    });
  }

  selectTutors($event: string[]): void {
    this.tutorsToAdd = $event;
  }

  selectStudents($event: string[]): void {
    this.studentsToAdd = $event;
  }

  addStudents(): void {
    if (this.addStudentsInputVisible) {
      this.studentsToAdd.forEach(student => {
        this.courseService.addStudent(this.subject.id, student).subscribe(() => {
          this.retrieveSubjectData(this.subject.id);
        });
      });
    }
    this.addStudentsInputVisible = !this.addStudentsInputVisible;
  }
  addTutors(): void {
    if (this.addTutorsInputVisible) {
      this.tutorsToAdd.forEach(tutor => {
        this.courseService.addTutor(this.subject.id, tutor).subscribe(() => {
          this.retrieveSubjectData(this.subject.id);
        });
      });
    }
    this.addTutorsInputVisible = !this.addTutorsInputVisible;
  }

  editTeacher(): void {
    this.addTeacherInputVisible = true;
    this.userService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
  }

  formatUser(user: User): string {
    return user ? `${user.firstName} ${user.lastName} - ${user.email}` : '';
  }

  selectTeacher(event: MatAutocompleteSelectedEvent): void {
    this.addTeacherInputVisible = false;
    this.infoChange('teacher', event.option.value);
  }
}
