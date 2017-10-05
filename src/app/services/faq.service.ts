import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FaqService {
  constructor(public http: Http) {
  }

  getFaqs() {
    return this.http.get('')
      .map(res => res.json());
  }
}
