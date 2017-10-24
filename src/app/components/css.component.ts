import { Component } from '@angular/core';
import { CodeService } from '../services/code.service';

@Component({
  selector: 'app-code-css',
  templateUrl: '../html/css.html',
  styleUrls: ['../css/css.css']
})
export class CssComponent {

  public code: any[] = [];

  constructor(public codeService: CodeService) {
    this.codeService.getCode().subscribe(code => {
      this.code = code;
      console.log(code);
    });
  }
}
