import { Component } from '@angular/core';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: '../html/faq.html',
  styleUrls: ['../css/faq.css']
})
export class FaqComponent {
  faqs: any[]= [
    {
      question: 'What is a div?',
      answer: 'The div tag is nothing more than a container unit that encapsulates other page elements and divides the HTML document into sections. Web developers use div elements to group together HTML elements and apply CSS styles to many elements at once. For instance, by wrapping a set of paragraph elements into a div element, the developer can take advantage of CSS styles and apply a font to all paragraphs at once by applying a font style to the div tag instead of coding the same style for each paragraph element.',
      index: 1
    },
    {
      question: 'What is a heading?',
      answer: 'Headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading. <h6> defines the least important heading.',
      index: 2
    },
    {
      question: 'how are links stated?',
      answer: 'You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.',
      index: 3
    }
  ];
  examples: any[];
  questions: any[];
  constructor(public faqService: FaqService) {
    this.faqService.getFaq().subscribe(examples => {
      this.examples = examples;
      console.log(examples);
    });
  }
}
