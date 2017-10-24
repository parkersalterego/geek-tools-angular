import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CodeService {
  constructor(public http: Http) {
  }

  getCode() {
    return this.http.get('http://localhost:3000/code')
      .map(res => res.json());
  }
}
