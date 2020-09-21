import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {User} from '../../../providers/types/wl-types';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {UserService} from '../../../providers/user.service';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'wl-user-chip-list',
  templateUrl: './user-chip-list.component.html',
  styleUrls: ['./user-chip-list.component.scss']
})
export class UserChipListComponent implements OnInit {

  @Input()
  set users(allUsers: User[]) {
    this.allUsers = allUsers;
    this.setFilteredUsers();
  }
  @Input()
  set preselectedUsers(selectedUsers: User[]) {
    this.selectedUsernames = selectedUsers.map(user => user.username);
  }
  @Input()
  placeholder = 'User';
  @Output()
  selectedUserChange: EventEmitter<string[]> = new EventEmitter();

  @ViewChild('userInput')
  userInput: ElementRef<HTMLInputElement>;
  @ViewChild('userAuto')
  userAuto: MatAutocomplete;

  allUsers: User[] = [];
  selectedUsernames: string[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  usersControl = new FormControl();
  filteredUsers: Observable<string[] | User[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.setFilteredUsers();
  }

  setFilteredUsers(): void {
    this.filteredUsers = this.usersControl.valueChanges.pipe(
      startWith(null),
      map((users: string | null) => users ?
        this.filterUsers(users, this.allUsers) :
        this.allUsers.slice().filter(user => !this.selectedUsernames.includes(user.username))));
  }

  selectedUsername(event: MatAutocompleteSelectedEvent): void {
    this.selectedUsernames.push(event.option.value);
    this.userInput.nativeElement.value = '';
    this.usersControl.setValue(null);
    this.selectedUserChange.emit(this.selectedUsernames);
  }

  // Uncomment if you want to add manual text as user
  // addUserChip(event: MatChipInputEvent): void {
  //   this.add(event, this.selectedUserEmails, this.usersControl);
  // }

  removeUsernameChip(username: string): void {
    this.remove(username, this.selectedUsernames);
    this.selectedUserChange.emit(this.selectedUsernames);
  }

  // Uncomment if you want to add manual text as user
  // add(event: MatChipInputEvent, selectedArray, control): void {
  //   const input = event.input;
  //   const value = event.value;
  //
  //   if ((value || '').trim()) {
  //     selectedArray.push(value.trim());
  //   }
  //
  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  //
  //   control.setValue(null);
  // }

  remove(item: string, selectedArray): void {
    const index = selectedArray.indexOf(item);

    if (index >= 0) {
      selectedArray.splice(index, 1);
    }
  }

  getUserFullNameByUsername(username: string, userAray): string {
    const u = userAray.find(t => t.username === username);
    if (u) {
      return u.firstName + ' ' + u.lastName;
    } else {
      return username;
    }
  }


  // TODO do not allow random txt

  private filterUsers(user: string, allUsers): string[] {
    const filterValue = user.toLowerCase();
    const filteredResult = allUsers.filter(us => (us.firstName.toLowerCase().indexOf(filterValue) === 0 ||
      us.lastName.toLowerCase().indexOf(filterValue) === 0 ||
      us.email.toLowerCase().indexOf(filterValue) === 0) &&
    !this.selectedUsernames.includes(us.username));
    return filteredResult;
  }
}
