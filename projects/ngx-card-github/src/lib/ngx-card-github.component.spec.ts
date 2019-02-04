import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCardGithubComponent } from './ngx-card-github.component';

describe('NgxCardGithubComponent', () => {
  let component: NgxCardGithubComponent;
  let fixture: ComponentFixture<NgxCardGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCardGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCardGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
