import { CommonModule } from '@angular/common';
import { Component, OnInit, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavContentComponent } from './nav-content/nav-content.component';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterModule, NavContentComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  
    // public props
  windowWidth: number;
  NavMobCollapse = output();

  // constructor
  constructor() {
    this.windowWidth = window.innerWidth;
  }

  // public method
  navMobCollapse() {
    if (this.windowWidth < 992) {
      this.NavMobCollapse.emit();
    }
  }
  ngOnInit(): void {
    
  }

activeMenu: string | null = null;

  toggleMenu(menuId: string): void {
    this.activeMenu = this.activeMenu === menuId ? null : menuId;

    // Optional: remove 'navbar-collapsed' class if submenu needs space
    const sidebar = document.querySelector('.pcoded-navbar');
    if (sidebar?.classList.contains('navbar-collapsed')) {
      sidebar.classList.remove('navbar-collapsed');
    }
  }

}