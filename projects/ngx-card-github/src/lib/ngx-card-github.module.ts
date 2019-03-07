import { NgxCardGithubHeaderComponent } from './header/ngx-card-github-header.component';
import { NgModule } from '@angular/core';
import { NgxCardGithubComponent } from './ngx-card-github.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxCardGithubContentComponent } from './ngx-card-github-content/ngx-card-github-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    NgxCardGithubComponent,
    NgxCardGithubContentComponent,
    NgxCardGithubHeaderComponent
  ],
  imports: [HttpClientModule, FontAwesomeModule],
  exports: [NgxCardGithubComponent]
})
export class NgxCardGithubModule {
  constructor() {
    library.add(faStar, faGithub, faCircle);
  }
}
