import { NgxCardStackoverflowBadgesComponent } from './badges/ngx-card-stackoverflow-badges.component';
import { NgModule } from '@angular/core';
import { NgxCardStackoverflowComponent } from './ngx-card-stackoverflow.component';
import { NgxCardStackoverflowReputationComponent } from './reputation/ngx-card-stackoverflow-reputation.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgxCardStackoverflowComponent,
    NgxCardStackoverflowReputationComponent,
    NgxCardStackoverflowBadgesComponent
  ],
  imports: [HttpClientModule, CommonModule],
  exports: [NgxCardStackoverflowComponent]
})
export class NgxCardStackoverflowModule {}
