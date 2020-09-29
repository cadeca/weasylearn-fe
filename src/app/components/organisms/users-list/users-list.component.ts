import {Component, Input} from '@angular/core';
import {User} from '../../../providers/types/wl-types';
import {Roles} from '../../../directives/roles';
import {Router} from '@angular/router';

@Component({
  selector: 'wl-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  visibleUsers: User[] = [];
  private allUsers: User[] = [];
  roles = Roles;


  @Input()
  set users(users: User[]) {
    if (users) {
      this.visibleUsers = [...users];
      this.allUsers = [...users];
    }
  }

  @Input()
  set searchField(searchField: string) {
    if (searchField) {
      this.visibleUsers = this.allUsers.filter(user => {
        return user.firstName.toLowerCase().includes(searchField.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchField.toLowerCase()) ||
          user.username.toLowerCase().includes(searchField.toLowerCase()) ||
          user.email.toLowerCase().includes(searchField.toLowerCase());
      });
    } else {
      this.visibleUsers = this.allUsers;
    }
  }

  constructor(private router: Router) { }

}
