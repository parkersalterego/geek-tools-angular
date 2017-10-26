import { Component } from '@angular/core';

@Component({
  selector: 'app-code-html',
  templateUrl: '../html/html.html',
  styleUrls: ['../css/html.css']
})
export class HtmlComponent {
  htmls: any[] = [
    {
      "_id": {
          "$oid": "59eac17d734d1d17c854389e"
      },
      "language": "html",
      "name": "H1",
      "simpleExplanation": "lorem",
      "explanation": "ipsem",
      "references": "https://www.w3schools.com/tags/tag_hn.asp",
      "webBrowser": "works on all web browsers",
      "codePen": "codepenlink.com",
      "example": {
          "one": "<h1>most important part of the website <h1>",
          "two": " <h1 class=\"headline\">welcome to my site<h1>"
      }
  },
  {
    "_id": {
        "$oid": "59eac435734d1d17c854390d"
    },
    "language": "html",
    "name": "anchor tags",
    "simpleExplanation": "The <a> tag links from one page to another",
    "explanation": "The <a> tag defines a hyperlink, which is used to link from one page to another.",
    "references": "https://www.w3schools.com/tags/tag_a.asp",
    "webBrowser": "works on all web browsers",
    "codePen": "codepenlink.com/anchor",
    "example": {
        "one": "<<a href=#>a<\/a>> tags <a href=\"#\">link<\/a> you from one page to another",
        "two": "<a> tags can be used to link you from here to <a href=\"#\">here<\/a>"
    }
}
  ];

  returnTarget(index: number) {
    return '#collapse' + (index + 1);
  }

  returnId(index: number) {
    return 'collapse' + (index + 1);
  }
}
