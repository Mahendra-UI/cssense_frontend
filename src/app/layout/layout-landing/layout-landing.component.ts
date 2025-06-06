import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout-landing',
  imports: [CommonModule, RouterModule, SidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './layout-landing.component.html',
  styleUrl: './layout-landing.component.scss'
})
export class LayoutLandingComponent implements OnInit {
isCollapsed = false;
  isHovered = false;
  isMobileOpen = false;

  toggleSidebar() {
    if (window.innerWidth <= 768) {
      this.isMobileOpen = !this.isMobileOpen;
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  closeSidebar() {
    this.isMobileOpen = false;
  }

hoverTimeout: any;

onSidebarEnter() {
  if (this.isCollapsed) {
    clearTimeout(this.hoverTimeout);
    this.isHovered = true;
  }
}

onSidebarLeave() {
  if (this.isCollapsed) {
    this.hoverTimeout = setTimeout(() => {
      this.isHovered = false;
    }, 150); // small delay to avoid flickering
  }
}


  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.isMobileOpen = false;
    }
  }

  ngOnInit(): void {}
}
