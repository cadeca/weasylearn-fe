import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wl-editable-label-value-entry',
  templateUrl: './editable-label-value-entry.component.html',
  styleUrls: ['./editable-label-value-entry.component.scss']
})
export class EditableLabelValueEntryComponent implements OnInit {
  @Input()
  editPermissions: boolean;
  @Input()
  value: string;
  @Input()
  label: string;

  constructor() { }

  ngOnInit(): void {
  }

  editRequest(): void {

  }
}
