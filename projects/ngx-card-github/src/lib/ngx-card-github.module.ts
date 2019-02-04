import { NgModule } from '@angular/core';
import { NgxCardGithubComponent } from './ngx-card-github.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxCardGithubContentComponent } from './ngx-card-github-content/ngx-card-github-content.component';

@NgModule({
  declarations: [NgxCardGithubComponent, NgxCardGithubContentComponent],
  imports: [HttpClientModule],
  exports: [NgxCardGithubComponent]
})
export class NgxCardGithubModule {}
