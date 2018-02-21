import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMatcherComponent } from './error-matcher.component';

describe('ErrorMatcherComponent', () => {
  let component: ErrorMatcherComponent;
  let fixture: ComponentFixture<ErrorMatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
