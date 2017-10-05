import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routedComponents } from './modules/app.routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav.component';

import { FaqService } from './services/faq.service';



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
    AppRoutingModule

  ],
  providers: [FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
