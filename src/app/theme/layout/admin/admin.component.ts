import { CommonModule, LocationStrategy } from '@angular/common';
import { Component, HostListener, Inject, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Footer } from './footer/footer';
import { ConfigurationComponent } from './configuration/configuration.component';
import { BreadcrumbComponent } from '../shared/components/breadcrumb/breadcrumb.component';
import { NavigationService } from './navigation/navigation.service';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, RouterModule, NavBarComponent, NavigationComponent, Footer, ConfigurationComponent, BreadcrumbComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  // private location = Inject(Location);
  // private locationStrategy = Inject(LocationStrategy);

//   // public props
//   navCollapsed!: boolean;
//   navCollapsedMob: boolean;
//   windowWidth: number;

//   // constructor
//   constructor() {
//     this.windowWidth = window.innerWidth;
//     this.navCollapsedMob = false;
//   }

//   @HostListener('window:resize', ['$event'])
//   // eslint-disable-next-line
//   onResize(event: any): void {
//     this.windowWidth = event.target.innerWidth;
//     if (this.windowWidth < 992) {
//       document.querySelector('.pcoded-navbar')?.classList.add('menupos-static');
//       if (document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('navbar-collapsed')) {
//         document.querySelector('app-navigation.pcoded-navbar')?.classList.remove('navbar-collapsed');
//       }
//     }
//   }

//   // public method
//   navMobClick() {
//     if (this.windowWidth < 992) {
//       if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')) {
//         this.navCollapsedMob = !this.navCollapsedMob;
//         setTimeout(() => {
//           this.navCollapsedMob = !this.navCollapsedMob;
//         }, 100);
//       } else {
//         this.navCollapsedMob = !this.navCollapsedMob;
//       }
//     }
//   }

//   handleKeyDown(event: KeyboardEvent): void {
//     if (event.key === 'Escape') {
//       this.closeMenu();
//     }
//   }

//   closeMenu() {
//     if (document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')) {
//       document.querySelector('app-navigation.pcoded-navbar')?.classList.remove('mob-open');
//     }
//   }
// }


constructor(private navigationService: NavigationService) {
  this.windowWidth = window.innerWidth;
  this.navCollapsedMob = false;
}

navCollapsed = false;
  navCollapsedMob = false;
  windowWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth < 992) {
      document.querySelector('.pcoded-navbar')?.classList.add('menupos-static');
      this.navCollapsed = false; // reset for mobile
    }
  }

  navMobClick() {
      console.log('WindowWidth before if:', this.windowWidth);
  if (this.windowWidth < 992) {
      console.log('WindowWidth after if:', this.windowWidth);
    this.navCollapsedMob = !this.navCollapsedMob;
    this.navigationService.setActive(null); // Reset all nav menu collapse
  }
}

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.navCollapsedMob = false;
    }
  }

  closeMenu() {
    this.navCollapsedMob = false;
  }
closeAllSubmenus(): void {
  const navComponent = document.querySelector('app-navigation');
  if (navComponent) {
    const openSubmenus = navComponent.querySelectorAll('.pcoded-hasmenu.active');
    openSubmenus.forEach(el => el.classList.remove('active'));
  }
}


}