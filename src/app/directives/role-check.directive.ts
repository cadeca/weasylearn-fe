import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ModulePermissionsService} from '../providers/module-permissions.service';

@Directive({
  selector: '[wlRoleCheck]'
})
export class RoleCheckDirective implements OnInit {

  @Input()
  whitelistedRoles: string[];
  isVisible = true;

  constructor(private el: ElementRef, private modulePermissionsService: ModulePermissionsService) {
  }

  ngOnInit(): void {
    this.isVisible = this.whitelistedRoles ? this.modulePermissionsService.isElementWhitelisted(this.whitelistedRoles) : true;
    if (!this.isVisible) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
