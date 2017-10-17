import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: '../html/people.html',
  styleUrls: ['../css/people.css']
})
export class PeopleComponent {

  public people = [
    {
      name: 'Irma Olguin',
      img_url: 'http://bitwiseindustries.com/wp-content/uploads/2015/09/irma-leadership.jpg'
    },
    {
      name: 'Jake Soberal',
      img_url: 'http://bitwiseindustries.com/wp-content/uploads/2015/09/jake-leadership.jpg'
    }
  ];


}
