import { Component } from '@angular/core';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: '../html/faq.html',
  styleUrls: ['../css/faq.css']
})
export class FaqComponent {
  faqs: any[];
  questions: any[];
  constructor(public faqService: FaqService) {
    this.faqService.getFaq().subscribe(faqs => {
      this.faqs = faqs;
      console.log(faqs);
    });
  }

  returnTarget(index: number) {
    return '#collapse' + (index + 1);
  }

  returnId(index: number) {
    return 'collapse' + (index + 1);
  }
}
