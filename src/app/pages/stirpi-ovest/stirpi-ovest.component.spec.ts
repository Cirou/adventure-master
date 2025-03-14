import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StirpiOvestComponent } from './stirpi-ovest.component';

describe('StirpiOvestComponent', () => {
  let component: StirpiOvestComponent;
  let fixture: ComponentFixture<StirpiOvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StirpiOvestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StirpiOvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
