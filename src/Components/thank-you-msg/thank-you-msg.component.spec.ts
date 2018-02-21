import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMsgComponent } from './thank-you-msg.component';

describe('ThankYouMsgComponent', () => {
  let component: ThankYouMsgComponent;
  let fixture: ComponentFixture<ThankYouMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
