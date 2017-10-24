import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



@Component({
  selector: 'app-code',
  templateUrl: '../html/code.html',
  styleUrls: ['../css/code.css']
})
export class CodeComponent {
  public htmlRoute = '/code/html';
  public cssRoute = '/code/css';
  public examplesRoute = '/code/examples';

}
