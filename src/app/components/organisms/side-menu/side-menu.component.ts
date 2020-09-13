import {Component, OnInit} from '@angular/core';
import {ModulePermissionsService} from '../../../providers/module-permissions.service';

@Component({
  selector: 'wl-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {


currentUserMenuItems = [];
constructor(private modulePermissionsService: ModulePermissionsService) {
}

  ngOnInit(): void {
    this.currentUserMenuItems = this.modulePermissionsService.getWhitelistedSidebarEntries();
  }

}
