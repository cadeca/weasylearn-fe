import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'wl-create-subject',
  templateUrl: './create-subject-dialog.component.html',
  styleUrls: ['./create-subject-dialog.component.scss']
})
export class CreateSubjectDialogComponent implements OnInit {

  public createSubject = new EventEmitter();

  newSubject = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, Validators.required),
    semester: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  create(): void {
    this.createSubject.emit(this.newSubject.value);
  }
}
