import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportCardsComponent } from './create-report-cards.component';

describe('CreateReportCardsComponent', () => {
  let component: CreateReportCardsComponent;
  let fixture: ComponentFixture<CreateReportCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReportCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReportCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
