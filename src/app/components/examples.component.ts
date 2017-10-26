import { Component } from '@angular/core';
import { ExamplesService } from '../services/examples.service';

@Component({
  selector: 'app-code-examples',
  templateUrl: '../html/examples.html',
  styleUrls: ['../css/examples.css']
})
export class ExamplesComponent {

  public examples: any[] = [];

  returnTarget(index: number) {
    return '#collapse' + (index + 1);
  }

  returnId(index: number) {
    return 'collapse' + (index + 1);
  }

  constructor(public examplesService: ExamplesService) {
    this.examplesService.getExamples().subscribe(examples => {
      this.examples = examples;
      console.log(examples);
    });
  }

}
