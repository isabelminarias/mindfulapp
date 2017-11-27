import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtcloudComponent } from './thoughtcloud.component';

describe('ThoughtcloudComponent', () => {
  let component: ThoughtcloudComponent;
  let fixture: ComponentFixture<ThoughtcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtcloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
