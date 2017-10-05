import { Component } from '@angular/core';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: '../html/faq.html',
  styleUrls: ['../css/faq.css']
})
export class FaqComponent {
  faqs: any[];
  constructor(public faqService: FaqService) {
    this.faqService.getFaqs().subscribe(faqs => {
      this.faqs = faqs;
    });
  }
}



