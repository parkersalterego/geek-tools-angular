import { Component } from '@angular/core';
import { CodeService } from '../services/code.service';

@Component({
  selector: 'app-code-css',
  templateUrl: '../html/css.html',
  styleUrls: ['../css/css.css']
})
export class CssComponent {

  public codes: any[] = [];

  returnTarget(index: number) {
    return '#collapse' + (index + 1);
  }

  returnId(index: number) {
    return 'collapse' + (index + 1);
  }

  constructor(public codeService: CodeService) {
    this.codeService.getCss().subscribe(code => {
      this.codes = code;
      console.log(code);
    });
  }
}
