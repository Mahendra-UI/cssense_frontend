import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '../../navigation';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-nav-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent implements OnInit {
  // public props
  @Input() item!: NavigationItem;
  constructor(private navigationService: NavigationService) {

  }

closeOtherMenu(event: MouseEvent) {
  this.navigationService.setActive(null);
  // also close mobile menu if needed
  const sidebar = document.querySelector('app-navigation.pcoded-navbar');
  if (sidebar?.classList.contains('mob-open')) {
    sidebar.classList.remove('mob-open');
  }
}

  // public method
  closeOtherMenuold(event: MouseEvent) {
    const ele = event.target as HTMLElement;
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement as HTMLElement;
      const up_parent = ((parent.parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      const last_parent = up_parent.parentElement;
      const sections = document.querySelectorAll('.pcoded-hasmenu');
      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
        sections[i].classList.remove('pcoded-trigger');
      }

      if (parent.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('pcoded-trigger');
        parent.classList.add('active');
      } else if (up_parent.classList.contains('pcoded-hasmenu')) {
        up_parent.classList.add('pcoded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('pcoded-hasmenu')) {
        last_parent.classList.add('pcoded-trigger');
        last_parent.classList.add('active');
      }
    }
    if (document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')) {
      document.querySelector('app-navigation.pcoded-navbar')?.classList.remove('mob-open');
    }
  }
  ngOnInit(): void {
    
  }
closeMenuOnClick(): void {
  // Close all open menus
  const sections = document.querySelectorAll('.pcoded-hasmenu');
  sections.forEach(section => {
    section.classList.remove('active', 'pcoded-trigger');
  });

  // Close mobile sidebar
  const sidebar = document.querySelector('app-navigation.pcoded-navbar');
  sidebar?.classList.remove('mob-open');
}

}