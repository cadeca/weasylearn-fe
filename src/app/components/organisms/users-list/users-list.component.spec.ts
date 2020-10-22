import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {MaterialModule} from '../../../material.module';
import {UsersListComponent} from './users-list.component';
import {TranslateModule} from '@ngx-translate/core';

describe('UsersListComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        TranslateModule.forRoot()
      ],
      declarations: [UsersListComponent]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(UsersListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should check initial state', () => {
    expect(component.isEditable).toBe(false);
    expect(component.visibleUsers.length).toBe(0);
  });

  it('should match empty snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should match snapshot with data', () => {
    component.visibleUsers = [
      {
        firstName: 'Test',
        lastName: 'User',
        username: 'test.user',
        email: 'test.user@email.com',
        type: 'student'
      },
      {
        firstName: 'Test1',
        lastName: 'User1',
        username: 'test1.user1',
        email: 'test1.user1@email.com',
        type: 'teacher'
      }
    ];
    expect(fixture).toMatchSnapshot();
  });
});
