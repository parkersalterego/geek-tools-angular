import { Component } from '@angular/core';
import { CodeService } from '../services/code.service';

@Component({
  selector: 'app-code-html',
  templateUrl: '../html/html.html',
  styleUrls: ['../css/html.css']
})
export class HtmlComponent {
  htmls: any[] = [];

  returnTarget(index: number) {
    return '#collapse' + (index + 1);
  }

  returnId(index: number) {
    return 'collapse' + (index + 1);
  }

  constructor(public codeService: CodeService) {
    this.codeService.getHtml().subscribe(htmls => {
      this.htmls = htmls;
      console.log(htmls);
    });
  }
}
