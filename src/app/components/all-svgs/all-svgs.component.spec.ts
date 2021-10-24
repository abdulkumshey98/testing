import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSvgsComponent } from './all-svgs.component';

describe('AllSvgsComponent', () => {
  let component: AllSvgsComponent;
  let fixture: ComponentFixture<AllSvgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSvgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSvgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
