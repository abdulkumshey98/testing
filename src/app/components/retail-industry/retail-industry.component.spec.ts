import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailIndustryComponent } from './retail-industry.component';

describe('RetailIndustryComponent', () => {
  let component: RetailIndustryComponent;
  let fixture: ComponentFixture<RetailIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
