import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GargoyleComponent } from './gargoyle.component';

describe('GargoyleComponent', () => {
  let component: GargoyleComponent;
  let fixture: ComponentFixture<GargoyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GargoyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GargoyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
