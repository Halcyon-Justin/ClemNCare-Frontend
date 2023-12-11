import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditFamilyComponent } from './create-edit-family.component';

describe('CreateEditFamilyComponent', () => {
  let component: CreateEditFamilyComponent;
  let fixture: ComponentFixture<CreateEditFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
