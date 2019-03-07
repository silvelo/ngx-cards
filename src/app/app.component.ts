import { Component } from '@angular/core';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  github = '';
  stackoverflow = '';

  githubUser = '';
  stackoverflowUser = '5609909';

  setStackOverflow() {
    this.stackoverflowUser = this.stackoverflow;
  }
  setGithub() {
    this.githubUser = this.github;
  }
}
