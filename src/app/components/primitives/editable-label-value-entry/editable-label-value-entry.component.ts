import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'wl-editable-label-value-entry',
  templateUrl: './editable-label-value-entry.component.html',
  styleUrls: ['./editable-label-value-entry.component.scss']
})
export class EditableLabelValueEntryComponent  {

  @Output()
  valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  triggerManualEdit: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  editPermissions: boolean;
  @Input()
  manualEdit: boolean;
  @Input()
  value: string;
  @Input()
  label: string;

  editable = false;

  editRequest(): void {
    this.editable = true;
    this.triggerManualEdit.emit(true);
  }

  saveValue(): void {
    this.editable = false;
    this.valueChange.emit(this.value);
  }
}
