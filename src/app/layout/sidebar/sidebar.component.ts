import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
 @Input() isCollapsed: boolean = false;
  @Input() isHovered: boolean = false;
  @Input() isMobileOpen: boolean = false;

  toggles: { [key: string]: boolean } = {};

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // 👇 Auto-collapse all dropdowns
        this.toggles = {};

        // 👇 Close sidebar on mobile
        if (window.innerWidth <= 768) {
          this.isMobileOpen = false;
        }
      }
    });
  }

  toggleDropdown(key: string): void {
    this.toggles[key] = !this.toggles[key];
  }

  isExpanded(key: string): boolean {
    return this.toggles[key];
  }

  onSidebarEnter(): void {
    if (this.isCollapsed) {
      this.isHovered = true;
    }
  }

  onSidebarLeave(): void {
    if (this.isCollapsed) {
      this.isHovered = false;
    }
  }
  toggleSidebar(): void {
  this.isCollapsed = !this.isCollapsed;
    this.isHovered = false;
}
}
