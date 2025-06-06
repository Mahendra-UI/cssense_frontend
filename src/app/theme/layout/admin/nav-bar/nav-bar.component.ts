import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterModule, NavLeftComponent, NavRightComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  // public props
  menuClass: boolean;
  collapseStyle: string;
  windowWidth: number;

  NavCollapse = output();
  NavCollapsedMob = output();

  // constructor
  constructor() {
    this.menuClass = false;
    this.collapseStyle = 'none';
    this.windowWidth = window.innerWidth;
  }

  // public method
  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = this.menuClass ? 'block' : 'none';
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.NavCollapse.emit();
      this.CloseAllMenus.emit(); // 🔄 emit this
    }
  }

  navCollapseMob() {
    if (this.windowWidth < 992) {
      this.NavCollapsedMob.emit();
      this.CloseAllMenus.emit(); // 🔄 emit this
    }
  }
  ngOnInit(): void {
    
  }
  @Output() CloseAllMenus = new EventEmitter<void>();

}
