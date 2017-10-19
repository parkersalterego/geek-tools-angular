import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FaqService {
  constructor(public http: Http) {
  }

  getFaq() {
    return this.http.get('http://localhost:3000/examples')
      .map(res => res.json());
  }
}
