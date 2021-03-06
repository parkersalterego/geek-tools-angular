import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routedComponents } from './modules/app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav.component';

import { FaqService } from './services/faq.service';
import { PeopleService } from './services/people.service';
import { ExamplesService } from './services/examples.service';
import { CodeService } from './services/code.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [FaqService, PeopleService, ExamplesService, CodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
