import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StirpiNordComponent } from './stirpi-nord.component';

describe('StirpiNordComponent', () => {
  let component: StirpiNordComponent;
  let fixture: ComponentFixture<StirpiNordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StirpiNordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StirpiNordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
