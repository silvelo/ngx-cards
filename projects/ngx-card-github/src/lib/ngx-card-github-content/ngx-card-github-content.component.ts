import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-card-github-content',
  templateUrl: './ngx-card-github-content.component.html',
  styleUrls: ['./ngx-card-github-content.component.sass']
})
export class NgxCardGithubContentComponent {
  @Input() stars = 0;
  @Input() followers = 0;
  @Input() repos = 0;
}
