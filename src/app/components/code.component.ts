import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

interface NavigationItems {
  url: string;
}

@Component({
  selector: 'app-code',
  templateUrl: '../html/code.html',
  styleUrls: ['../css/code.css']
})
export class CodeComponent {}
