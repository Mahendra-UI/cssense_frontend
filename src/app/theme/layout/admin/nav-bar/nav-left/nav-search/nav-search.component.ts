import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-search',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-search.component.html',
  styleUrl: './nav-search.component.scss'
})
export class NavSearchComponent implements OnInit {
  // public props
  searchOn: boolean;

  // constructor
  constructor() {
    this.searchOn = false;
  }
  ngOnInit(): void {
    
  }
}
