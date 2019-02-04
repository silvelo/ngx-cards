import {
  Component,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  Input
} from '@angular/core';
import { NgxCardGithubService, IGithubUser } from './ngx-card-github.service';

@Component({
  selector: 'ngx-card-github',
  templateUrl: './ngx-card-github.component.html',
  styleUrls: ['./ngx-card-github.component.sass']
})
export class NgxCardGithubComponent implements OnChanges {
  @Input() userId = '';
  userData: IGithubUser;
  totalStars: number;

  constructor(private github: NgxCardGithubService) {}

  async ngOnChanges(changes: SimpleChanges) {
    const userId: SimpleChange = changes.userId;
    if (userId.currentValue) {
      this.userData = await this.github.getUser(userId.currentValue);
      this.totalStars = await this.github.getTotalStars(userId.currentValue);
    }
  }

  goTo(url: string) {
    window.open(url, 'blank');
  }
}
