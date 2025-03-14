import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloverComponent } from './clover.component';

describe('CloverComponent', () => {
  let component: CloverComponent;
  let fixture: ComponentFixture<CloverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
