import { Component } from '@angular/core';

@Component({
  selector: 'app-code-examples',
  templateUrl: '../html/examples.html',
  styleUrls: ['../css/examples.css']
})
export class ExamplesComponent {

  public examples = [
    {
      title: 'This is the title for an example',
      example: 'This is an example for the examples',
      tags: 'exampletag'
    },
    {
      title: 'This is the title for an example',
      example: 'This is an example for the examples',
      tags: 'exampletag2'
    }
  ];
}
