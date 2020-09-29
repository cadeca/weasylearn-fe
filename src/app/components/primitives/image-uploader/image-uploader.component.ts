import {Component, EventEmitter, Output} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'wl-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {

  @Output()
  imageChange: EventEmitter<File> = new EventEmitter();

  imageChangedEvent: any = '';
  croppedImage: any = '';

  onImageSelected(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }
  imageLoaded(): void {
    // show cropper
  }
  cropperReady(): void {
    // show image
  }
  loadImageFailed(): void {
    // show message
  }

  saveImage(): void {
    if (this.croppedImage) {
      this.imageChange.emit(this.croppedImage);
      this.croppedImage = null;
      this.imageChangedEvent = null;
    }
  }
}
