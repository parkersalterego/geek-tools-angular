import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExamplesService {
  constructor(public http: Http) {
  }

  getExamples() {
    return this.http.get('http://localhost:3000/examples')
      .map(res => res.json());
  }
}
