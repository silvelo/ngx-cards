import {
  IStackoverflowUser,
  NgxCardStackoverflowService
} from './ngx-card-stackoverflow.service';
import {
  Component,
  OnChanges,
  Input,
  SimpleChanges,
  SimpleChange
} from '@angular/core';

@Component({
  selector: 'ngx-card-stackoverflow',
  templateUrl: './ngx-card-stackoverflow.component.html',
  styleUrls: ['./ngx-card-stackoverflow.component.sass']
})
export class NgxCardStackoverflowComponent implements OnChanges {
  @Input() userId = '';
  userData: IStackoverflowUser;

  constructor(private stackoverflow: NgxCardStackoverflowService) {}

  async ngOnChanges(changes: SimpleChanges) {
    const userId: SimpleChange = changes.userId;
    if (userId.currentValue) {
      this.userData = await this.stackoverflow.getUser(userId.currentValue);
    }
  }

  goTo(url: string) {
    window.open(url, 'blank');
  }
}
