import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: '../html/people.html',
  styleUrls: ['../css/people.css']
})

export class PeopleComponent {

  public people: any[] = [];

  public count = 0;

  public nextProfile() {
    if (this.count === this.people.length - 1) {
      this.count = 0;
    } else {
      this.count = this.count + 1;
    }
  }

  public previousProfile() {
    if (this.count === 0 ) {
      this.count = this.people.length - 1;
    } else {
      this.count = this.count - 1;
    }
  }


  constructor(public peopleService: PeopleService) {
    this.peopleService.getPeople().subscribe(people => {
      this.people = people;
      console.log(people);
    });
  }
}

