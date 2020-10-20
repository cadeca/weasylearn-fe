import {Component, EventEmitter, Output} from '@angular/core';
import {ImageCroppedEvent, ImageTransform} from 'ngx-image-cropper';

@Component({
  selector: 'wl-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {

  @Output()
  imageChange: EventEmitter<File> = new EventEmitter();

  file: File = null;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  scale = 1;
  transform: ImageTransform = {};

  onImageSelected(event: any): void {
    this.imageChangedEvent = event;
    this.file = event.target.files[0];
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
      this.imageChange.emit(new File([this.croppedImage], this.file.name, {type: this.file.type}));
      this.croppedImage = null;
      this.imageChangedEvent = null;
    }
  }

  zoomOut(): void {
    this.scale -= 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomIn(): void {
    this.scale += 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }
}
