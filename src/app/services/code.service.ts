import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CodeService {
  constructor(public http: Http) {
  }

  getHtml() {
    return this.http.get('http://localhost:3000/code/html')
      .map(res => res.json());
  }

  getCss() {
    return this.http.get('http://localhost:3000/code/css')
      .map(res => res.json());
  }
}
