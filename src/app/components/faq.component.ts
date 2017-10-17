import { Component } from '@angular/core';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: '../html/faq.html',
  styleUrls: ['../css/faq.css']
})
export class FaqComponent {
  answers: any[];
  questions: any[];
  constructor(public faqService: FaqService) {
    this.faqService.getFaq().subscribe(questions => {
      this.questions = questions;
      console.log(questions);
    });
  }
}
