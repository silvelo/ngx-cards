import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-card-stackoverflow-header',
  templateUrl: './ngx-card-stackoverflow-header.component.html',
  styleUrls: ['./ngx-card-stackoverflow-header.component.sass']
})
export class NgxCardStackoverflowHeaderComponent {
  @Input() name: string;
}
