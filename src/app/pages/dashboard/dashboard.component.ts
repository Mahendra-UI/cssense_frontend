import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  stats = [
  { value: '9526', label: 'Total Orders', icon: 'bi-cart-fill text-primary' },
  { value: '$8323', label: 'Total Revenue', icon: 'bi-currency-dollar text-success' },
  { value: '6200', label: 'Visitors', icon: 'bi-person-fill text-danger' },
  { value: '5630', label: 'Messages', icon: 'bi-envelope-fill text-warning' }
];
  constructor() {}

  ngOnInit(): void {
    
  }

}
