import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-card-github-header',
  templateUrl: './ngx-card-github-header.component.html',
  styleUrls: ['./ngx-card-github-header.component.sass']
})
export class NgxCardGithubHeaderComponent {
  @Input() name: string;
}
