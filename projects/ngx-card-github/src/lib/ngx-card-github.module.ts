import { NgModule } from '@angular/core';
import { NgxCardGithubComponent } from './ngx-card-github.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxCardGithubContentComponent } from './ngx-card-github-content/ngx-card-github-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [NgxCardGithubComponent, NgxCardGithubContentComponent],
  imports: [HttpClientModule, FontAwesomeModule],
  exports: [NgxCardGithubComponent]
})
export class NgxCardGithubModule {
  constructor() {
    library.add(faStar);
  }
}
