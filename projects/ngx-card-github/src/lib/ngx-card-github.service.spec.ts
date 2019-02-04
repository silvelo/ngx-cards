import { TestBed } from '@angular/core/testing';

import { NgxCardGithubService } from './ngx-card-github.service';

describe('NgxCardGithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCardGithubService = TestBed.get(NgxCardGithubService);
    expect(service).toBeTruthy();
  });
});
