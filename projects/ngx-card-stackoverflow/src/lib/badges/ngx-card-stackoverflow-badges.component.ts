import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-card-stackoverflow-badges',
  templateUrl: './ngx-card-stackoverflow-badges.component.html',
  styleUrls: ['./ngx-card-stackoverflow-badges.component.sass']
})
export class NgxCardStackoverflowBadgesComponent {
  @Input() badges: any;
}
