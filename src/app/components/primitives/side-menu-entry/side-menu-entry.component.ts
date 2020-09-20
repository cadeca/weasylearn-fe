import {Component, Input, OnInit} from '@angular/core';
import {SidebarEntry} from '../../../providers/types/wl-types';
import {Router} from '@angular/router';

@Component({
  selector: 'wl-side-menu-entry',
  templateUrl: './side-menu-entry.component.html',
  styleUrls: ['./side-menu-entry.component.scss']
})
export class SideMenuEntryComponent implements OnInit {

  @Input()
  sidebarEntry: SidebarEntry;
  showChildren = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPage(code: string): void {
    this.router.navigate([code]);
  }

  toggleChildrenVisible(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.showChildren = !this.showChildren;
  }
}
