import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../../navigation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-nav-collapse',
  imports: [CommonModule, RouterModule, NavItemComponent],
  templateUrl: './nav-collapse.component.html',
  styleUrl: './nav-collapse.component.scss'
})
export class NavCollapseComponent implements OnInit {
    // public props
  @Input() item!: NavigationItem;

  constructor(private navigationService: NavigationService) {
    
  }

  // public method
  navCollapseold(e: MouseEvent) {
    let parent = e.target as HTMLElement;
    parent = (parent as HTMLElement).parentElement as HTMLElement;

    const sections = document.querySelectorAll('.pcoded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('pcoded-trigger');
      }
    }
    let firstParent = parent.parentElement;
    let preParent = ((parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
    if (firstParent?.classList.contains('pcoded-hasmenu')) {
      do {
        firstParent?.classList.add('pcoded-trigger');
        firstParent = ((firstParent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (firstParent.classList.contains('pcoded-hasmenu'));
    } else if (preParent.classList.contains('pcoded-submenu')) {
      do {
        preParent?.parentElement?.classList.add('pcoded-trigger');
        preParent = (((preParent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (preParent.classList.contains('pcoded-submenu'));
    }
    parent.classList.toggle('pcoded-trigger');
  }


  navCollapse(e: MouseEvent) {
    let parent = e.target as HTMLElement;
    parent = (parent as HTMLElement).parentElement as HTMLElement;

    const sections = document.querySelectorAll('.pcoded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('pcoded-trigger');
      }
    }
    let firstParent = parent.parentElement;
    let preParent = ((parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
    if (firstParent?.classList.contains('pcoded-hasmenu')) {
      do {
        firstParent?.classList.add('pcoded-trigger');
        firstParent = ((firstParent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (firstParent.classList.contains('pcoded-hasmenu'));
    } else if (preParent.classList.contains('pcoded-submenu')) {
      do {
        preParent?.parentElement?.classList.add('pcoded-trigger');
        preParent = (((preParent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (preParent.classList.contains('pcoded-submenu'));
    }
    parent.classList.toggle('pcoded-trigger');
      // 🔥 FIX: Remove `navbar-collapsed` class from the sidebar so submenu is visible
  const sidebar = document.querySelector('app-navigation.pcoded-navbar');
  sidebar?.classList.remove('navbar-collapsed')
  }

  

  ngOnInit(): void {
    
  }
 isActive(): boolean {
  return this.navigationService.getActiveMenuId() === this.item.id;
}

toggleCollapse(): void {
  const currentlyActive = this.navigationService.getActiveMenuId();
  this.navigationService.setActive(currentlyActive === this.item.id ? null : this.item.id);
}
}
