import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PericoliComponent } from './pericoli.component';

describe('PericoliComponent', () => {
  let component: PericoliComponent;
  let fixture: ComponentFixture<PericoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PericoliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PericoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
