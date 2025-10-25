import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GildeComponent } from './gilde.component';

describe('GildeComponent', () => {
  let component: GildeComponent;
  let fixture: ComponentFixture<GildeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GildeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GildeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
