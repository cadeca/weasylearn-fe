import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'wl-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit, OnDestroy {

  files: File[] = [];
  @Input()
  multiple = false;
  @Input()
  returnEvent = false;
  @Input()
  extensions: string[] = null;
  @Input()
  accept = '';
  @ViewChild('inputField', {static: true})
  inputField: ElementRef;

  @Input()
  reset: Subject<any>;

  @Output()
  filesChange: EventEmitter<File[]> = new EventEmitter();
  uploadError: string = null;
  constructor() { }

  ngOnInit(): void {
    if (this.reset) {
      this.reset.subscribe(event => {
        this.files = [];
        this.inputField.nativeElement.value = '';
        this.fileArrayChange();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.reset) {
      this.reset.unsubscribe();
    }
  }

  onFileUpload($event): void {
    this.uploadError = '';
    if (this.multiple) {
      Array.from($event.target.files).forEach(file => {
        const canUpload = this.canUploadFile(file);
        if (canUpload) {
          this.files.push(file as File);
        }
      });
    } else {
      const canUpload = this.canUploadFile($event.target.files[0]);
      if (canUpload) {
        this.files[0] = ($event.target.files[0] as File);
      }
    }
    this.fileArrayChange();
  }
  private fileArrayChange(): void {
     this.filesChange.emit(this.files);
  }

  removeFile(uploadedFile: File): void{
    this.files.splice(this.files.indexOf(uploadedFile), 1);
    this.fileArrayChange();
    this.inputField.nativeElement.value = '';
  }

  private canUploadFile(file: any): any {
    const fileExtension = (file as File).name.substring((file as File).name.lastIndexOf('.') + 1);
    if (this.extensions && this.extensions.indexOf(fileExtension.toLowerCase()) < 0) {
      this.uploadError = 'messages.wrong_extension';
      return false;
    }
    const sameFile = this.files.find(f => f.name === file.name &&
      f.size === file.size &&
      f.type === file.type &&
      f.lastModified === file.lastModified);

    return !sameFile;
  }
}
