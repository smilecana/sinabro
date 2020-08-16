import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTransactionsComponent } from './upcoming-transactions.component';

describe('UpcomingTransactionsComponent', () => {
  let component: UpcomingTransactionsComponent;
  let fixture: ComponentFixture<UpcomingTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
