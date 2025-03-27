import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtereComponent } from './etere.component';

describe('EtereComponent', () => {
  let component: EtereComponent;
  let fixture: ComponentFixture<EtereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
