import {Component} from '@angular/core';

@Component({
  selector: 'wl-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

private sideMenuEntries = [
  {
    code: 'subjects',
    route: 'subjects',
    icon: 'library_books',
    whitelistedRoles: [],
    // children: [
    //   {
    //     code: 'students',
    //     route: 'students',
    //     icon: 'group',
    //     whitelistedRoles: [],
    //   },
    //   {
    //     code: 'groups',
    //     route: 'groups',
    //     icon: 'forum',
    //     whitelistedRoles: [],
    //   }
    // ]
  },
  {
    code: 'questionBank',
    route: 'question-bank',
    icon: 'file_copy',
    whitelistedRoles: [],
  },
  {
    code: 'testTemplates',
    route: 'test-templates',
    icon: 'donut_small',
    whitelistedRoles: [],
  },
  {
    code: 'createTest',
    route: 'create-rest',
    icon: 'title',
    whitelistedRoles: [],
  },
  {
    code: 'grading',
    route: 'grading',
    icon: 'grading',
    whitelistedRoles: [],
  }
];
currentUserMenuItems = [...this.sideMenuEntries];

}
