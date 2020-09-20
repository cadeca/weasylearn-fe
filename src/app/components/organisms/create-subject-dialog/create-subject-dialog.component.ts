import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseSubject, Student, Teacher, User} from '../../../providers/types/wl-types';
import {UserService} from '../../../providers/user.service';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'wl-create-subject',
  templateUrl: './create-subject-dialog.component.html',
  styleUrls: ['./create-subject-dialog.component.scss']
})
export class CreateSubjectDialogComponent implements OnInit {

  @Output()
  createSubject: EventEmitter<CourseSubject> = new EventEmitter();

  @ViewChild('studentInput')
  studentInput: ElementRef<HTMLInputElement>;
  @ViewChild('tutorInput')
  tutorInput: ElementRef<HTMLInputElement>;
  @ViewChild('studentAuto')
  studentAuto: MatAutocomplete;
  @ViewChild('tutorAuto')
  tutorAuto: MatAutocomplete;


  @Input()
  set subject(subject: CourseSubject) {
    if (subject) {
      this.newSubject.controls.code.setValue(subject.code);
      this.newSubject.controls.name.setValue(subject.name);
      this.newSubject.controls.semester.setValue(subject.semester);
      this.newSubject.controls.description.setValue(subject.description);
      this.newSubject.controls.teacher.setValue(subject.teacher);
      this.newSubject.controls.tutors.setValue(subject.tutors);
      this.newSubject.controls.students.setValue(subject.students);
      this.newSubject.controls.groups.setValue(subject.groups);
    }
  }

  newSubject = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, Validators.required),
    semester: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    teacher: new FormControl(null),
    tutors: new FormControl(null),
    students: new FormControl(null),
    groups: new FormControl(null)
  });
  teachers: Teacher[] = [];
  tutors: User[] = [];
  students: Student[] = [];
  selectedTutors: string[] = [];
  selectedStudents: string[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];


  demoUsers: User[] = [{
    firstName: 'Alexandra',
    lastName: 'Ionel',
    email: 'alexainel94@gmail.com'
  },
    {
      firstName: 'Mario',
      lastName: 'Rivis',
      email: 'mariorivis@gmail.com'
    }, {
      firstName: 'Andy',
      lastName: 'Molin',
      email: 'andymolin@gmail.com'
    },
    {
      firstName: 'Darius',
      lastName: 'Nagy',
      email: 'dariusNagy@gmail.com'
    }];
  studentsControl = new FormControl();
  tutorControl = new FormControl();
  filteredTutors: Observable<string[] | User[]>;
  filteredStudents: Observable<string[] | Student[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
      this.tutors = [...this.teachers, ...this.students];
      this.setFilteredTutors();
      this.setFilteredStudents();
    });
    this.userService.getStudents().subscribe(students => {
      this.students = students;
      this.tutors = [...this.teachers, ...this.students];
      this.setFilteredTutors();
      this.setFilteredStudents();
    });


    // TODO delete
    this.teachers = this.demoUsers;
    this.tutors = this.demoUsers;
    this.students = this.demoUsers;
    this.setFilteredTutors();
    this.setFilteredStudents();
  }

  setFilteredTutors(): void {
    this.filteredTutors = this.tutorControl.valueChanges.pipe(
      startWith(null),
      map((tutors: string | null) => tutors ?
        this.filterUsers(tutors, this.tutors) :
        this.tutors.slice()));
  }
  setFilteredStudents(): void {
    this.filteredStudents = this.studentsControl.valueChanges.pipe(
      startWith(null),
      map((students: string | null) => students ?
        this.filterUsers(students, this.students) :
        this.students.slice()));
  }

  create(): void {
    this.createSubject.emit(this.newSubject.value);
  }

  close(): void {
    this.createSubject.emit(null);
  }

  selectedStudent(event: MatAutocompleteSelectedEvent): void {
    this.selectedStudents.push(event.option.viewValue);
    this.studentInput.nativeElement.value = '';
    this.newSubject.controls.students.setValue(null);
  }

  selectedTutor(event: MatAutocompleteSelectedEvent): void {
    this.selectedTutors.push(event.option.viewValue);
    this.tutorInput.nativeElement.value = '';
    this.newSubject.controls.tutors.setValue(null);
  }

  addTutor(event: MatChipInputEvent): void {
   this.add(event, this.selectedTutors, this.tutorControl);
  }

  removeTutor(tutor: string): void {
    this.remove(tutor, this.selectedTutors);
  }

  addStudent(event: MatChipInputEvent): void {
    this.add(event, this.selectedStudents, this.studentsControl);
  }

  removeStudent(student: string): void {
    this.remove(student, this.selectedStudents);
  }

  add(event: MatChipInputEvent, selectedArray, control): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      selectedArray.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    control.setValue(null);
  }

  remove(item: string, selectedArray): void {
    const index = selectedArray.indexOf(item);

    if (index >= 0) {
      selectedArray.splice(index, 1);
    }
  }

  getUserFullNameByEmail(user: string, userAray): string {
    const u = userAray.find(t => t.email === user);
    if (u) {
      return u.firstName + ' ' + u.lastName;
    } else {
      return user;
    }
  }


  // TODO filter out selected users
  // TODO do not allow random txt
  // TODO show number of students
  // TODO show number of tutors

  private filterUsers(user: string, allUsers): string[] {
    const filterValue = user.toLowerCase();

    return allUsers.filter(us => us.firstName.toLowerCase().indexOf(filterValue) === 0 ||
      us.lastName.toLowerCase().indexOf(filterValue) === 0 ||
      us.email.toLowerCase().indexOf(filterValue) === 0);
  }
}
