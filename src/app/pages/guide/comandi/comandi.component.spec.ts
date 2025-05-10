import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandiComponent } from './comandi.component';

describe('ComandiComponent', () => {
  let component: ComandiComponent;
  let fixture: ComponentFixture<ComandiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
