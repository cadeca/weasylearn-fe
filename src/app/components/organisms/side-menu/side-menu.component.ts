import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModulePermissionsService} from '../../../providers/module-permissions.service';

const MINIMUM_SIDEBAR_WIDTH = 50;

const MAXIMUM_SIDEBAR_WIDTH = 400;

@Component({
  selector: 'wl-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @ViewChild('resizableMenu')
  resizableMenu: ElementRef;
  mousePosition = 200;

  currentUserMenuItems = [];
  private onResizeBound: any;
  private resizeButton: HTMLElement;

  constructor(private modulePermissionsService: ModulePermissionsService) {
    if (!this.onResizeBound) {
      this.onResizeBound = this.resize.bind(this);
    }
  }

  handleMousedown(event: MouseEvent): void {
    if (event.clientX <= this.mousePosition + 2 && event.clientX >= this.mousePosition - 2 && event.clientX >= MINIMUM_SIDEBAR_WIDTH - 2) {
      this.mousePosition = event.clientX;
      document.addEventListener('mousemove', this.onResizeBound, true);
    }
  }

  handleMouseUp(event: MouseEvent): void {
    document.removeEventListener('mousemove', this.onResizeBound, true);
  }

  ngOnInit(): void {
    this.currentUserMenuItems = this.modulePermissionsService.getWhitelistedSidebarEntries();
  }

  resize(e): any {
    const dx = this.mousePosition - e.clientX;
    this.mousePosition = e.clientX;
    // tslint:disable-next-line:radix
    const nextMousePosition = (parseInt(getComputedStyle((this.resizableMenu as any)._elementRef.nativeElement, '').width) - dx);
    if (this.resizableMenu) {
      if (nextMousePosition >= MINIMUM_SIDEBAR_WIDTH && nextMousePosition <= MAXIMUM_SIDEBAR_WIDTH) {
        (this.resizableMenu as any)._elementRef.nativeElement.style.width = nextMousePosition + 'px';
      } else if (nextMousePosition < MINIMUM_SIDEBAR_WIDTH ) {
        (this.resizableMenu as any)._elementRef.nativeElement.style.width = MINIMUM_SIDEBAR_WIDTH + 'px';
        this.mousePosition = MINIMUM_SIDEBAR_WIDTH;
        this.handleMouseUp(e);
      } else {
        (this.resizableMenu as any)._elementRef.nativeElement.style.width = MAXIMUM_SIDEBAR_WIDTH + 'px';
        this.mousePosition = MAXIMUM_SIDEBAR_WIDTH;
        this.handleMouseUp(e);
      }
    }
  }
}
