import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home.component';
import { FaqComponent } from '../components/faq.component';
import { PeopleComponent } from '../components/people.component';
import { CodeComponent } from '../components/code.component';

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
    path: '**',
    component: HomeComponent
  }
];

export const routedComponents = [HomeComponent, FaqComponent, PeopleComponent, CodeComponent];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}


