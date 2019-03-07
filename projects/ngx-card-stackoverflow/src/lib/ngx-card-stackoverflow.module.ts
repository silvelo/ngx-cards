import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NgxCardStackoverflowBadgesComponent } from './badges/ngx-card-stackoverflow-badges.component';
import { NgModule } from '@angular/core';
import { NgxCardStackoverflowComponent } from './ngx-card-stackoverflow.component';
import { NgxCardStackoverflowReputationComponent } from './reputation/ngx-card-stackoverflow-reputation.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { NgxCardStackoverflowHeaderComponent } from './header/ngx-card-stackoverflow-header.component';

@NgModule({
  declarations: [
    NgxCardStackoverflowComponent,
    NgxCardStackoverflowReputationComponent,
    NgxCardStackoverflowBadgesComponent,
    NgxCardStackoverflowHeaderComponent
  ],
  imports: [HttpClientModule, CommonModule, FontAwesomeModule],
  exports: [NgxCardStackoverflowComponent]
})
export class NgxCardStackoverflowModule {
  constructor() {
    library.add(faStackOverflow, faCircle);
  }
}
