import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeggendeComponent } from './leggende.component';

describe('LeggendeComponent', () => {
  let component: LeggendeComponent;
  let fixture: ComponentFixture<LeggendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeggendeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeggendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
