import { Component } from '@angular/core';
import { ExamplesService } from '../services/examples.service';

@Component({
  selector: 'app-code-examples',
  templateUrl: '../html/examples.html',
  styleUrls: ['../css/examples.css']
})
export class ExamplesComponent {

  public examples: any[] = [];

  constructor(public examplesService: ExamplesService) {
    this.examplesService.getExamples().subscribe(examples => {
      this.examples = examples;
      console.log(examples);
    });
  }

}
