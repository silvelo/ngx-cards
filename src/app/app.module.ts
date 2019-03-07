import { NgxCardStackoverflowModule } from 'ngx-card-stackoverflow/ngx-card-stackoverflow.module';
import { NgxCardGithubModule } from 'ngx-card-github/ngx-card-github.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxCardGithubModule,
    NgxCardStackoverflowModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
