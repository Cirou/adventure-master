import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StirpiSudComponent } from './stirpi-sud.component';

describe('StirpiSudComponent', () => {
  let component: StirpiSudComponent;
  let fixture: ComponentFixture<StirpiSudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StirpiSudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StirpiSudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
