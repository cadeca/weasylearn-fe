import {ThemeSwitcherComponent} from './theme-switcher.component';
import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {MaterialModule} from '../../../material.module';

const DARK_THEME = 'dark-theme';
const LIGHT_THEME = 'light-theme';
const ORANGE_COLOR = 'orange-';

describe('ThemeSwitcherComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [ ThemeSwitcherComponent ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(ThemeSwitcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
  }));

  it('should check initial state', () => {
    expect(component.themeLight).toBe(LIGHT_THEME);
    expect(component.themeColor).toBe(ORANGE_COLOR);
    expect(component.darkThemeModeOn).toBe(false);
  });

  it('#dark-theme-toggle should trigger the correct method', fakeAsync (() => {
    expect(component.themeLight).toBe(LIGHT_THEME);
    spyOn(component, 'changeThemeLight');

    const input = fixture.debugElement.nativeElement.querySelector('#dark-theme-toggle');
    input.dispatchEvent(new Event('change', {target: {checked: true}} as any));
    tick();

    expect(component.changeThemeLight).toHaveBeenCalled();
  }));

  it('toggle dark theme should alter the correct attributes', () => {
    expect(component.themeLight).toBe(LIGHT_THEME);
    expect(localStorage.getItem('pxThemeLight')).toBe(LIGHT_THEME);

    component.changeThemeLight({checked: true});
    fixture.detectChanges();

    expect(component.themeLight).toBe(DARK_THEME);
    expect(localStorage.getItem('pxThemeLight')).toBe(DARK_THEME);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
