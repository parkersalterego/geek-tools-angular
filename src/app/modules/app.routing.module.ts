import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home.component';
import { FaqComponent } from '../components/faq.component';
import { PeopleComponent } from '../components/people.component';
import { CodeComponent } from '../components/code.component';
import { HtmlComponent } from '../components/html.component';
import { CssComponent } from '../components/css.component';
import { ExamplesComponent } from '../components/examples.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'code',
    component: CodeComponent
  },
  {
  path: 'code/html',
  component: HtmlComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

export const routedComponents = [
  HomeComponent,
  FaqComponent,
  PeopleComponent,
  CodeComponent,
  HtmlComponent,
  CssComponent,
  ExamplesComponent
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}


