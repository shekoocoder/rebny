import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/reports', title: 'Reports',  icon:'education_paper', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/icons', title: 'Documents',  icon:'files_single-copy-04', class: '' },

    { path: '/buyers', title: 'Buyer List',  icon:'travel_istanbul', class: '' },
    { path: '/sellers', title: 'Seller List',  icon:'shopping_shop', class: '' },
    { path: '/registry', title: 'Registry',  icon:'business_badge', class: '' },
    { path: '/challenges', title: 'Challenges',  icon:'education_glasses', class: '' },
    { path: '/votes', title: 'Votes',  icon:'design-2_ruler-pencil', class: '' },
    { path: '/apply', title: 'Apply',  icon:'files_single-copy-04', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
