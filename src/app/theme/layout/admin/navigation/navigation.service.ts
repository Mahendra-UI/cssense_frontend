import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
private activeMenuId = new BehaviorSubject<string | null>(null);
  activeMenu$ = this.activeMenuId.asObservable();

  setActive(menuId: string | null) {
    this.activeMenuId.next(menuId);
  }

  getActiveMenuId(): string | null {
    return this.activeMenuId.getValue();
  }
}