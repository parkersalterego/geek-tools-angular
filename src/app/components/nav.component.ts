import { Component } from '@angular/core';

interface NavigationItems {
  name: string;
  url: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: '../html/nav.html',
  styleUrls: ['../css/nav.css']
})
export class NavComponent {

  public listItems: NavigationItems[];

  constructor() {
    this.listItems = [
      {
        name: 'Home',
        url: '/home'
      },
      {
        name: 'FAQ',
        url: '/faq'
      },
      {
        name: 'People',
        url: '/people'
      },
      {
        name: 'HTML / CSS',
        url: '/code'
      }
    ];
  }
}
