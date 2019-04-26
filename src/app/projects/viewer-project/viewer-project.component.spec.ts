import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerProjectComponent } from './viewer-project.component';

describe('ViewerProjectComponent', () => {
  let component: ViewerProjectComponent;
  let fixture: ComponentFixture<ViewerProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
