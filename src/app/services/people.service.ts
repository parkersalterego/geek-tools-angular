import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  constructor(public http: Http) {
  }

  getPeople() {
    return this.http.get('http://localhost:3000/profile')
      .map(res => res.json());
  }
}
