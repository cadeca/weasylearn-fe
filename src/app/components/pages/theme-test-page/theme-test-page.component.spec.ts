import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThemeTestPageComponent} from './theme-test-page.component';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from '../../../material.module';

describe('ThemeTestPageComponent', () => {
  let component: ThemeTestPageComponent;
  let fixture: ComponentFixture<ThemeTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule,
        MaterialModule
      ],
      declarations: [ ThemeTestPageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
