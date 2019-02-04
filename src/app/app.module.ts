import { NgxCardStackoverflowModule } from 'ngx-card-stackoverflow';
import { NgxCardGithubModule } from 'ngx-card-github';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCardGithubModule, NgxCardStackoverflowModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
