import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-card-stackoverflow-reputation',
  templateUrl: './ngx-card-stackoverflow-reputation.component.html',
  styleUrls: ['./ngx-card-stackoverflow-reputation.component.sass']
})
export class NgxCardStackoverflowReputationComponent {
  @Input() reputation = 0;
}
