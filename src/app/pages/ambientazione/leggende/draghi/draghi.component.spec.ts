import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraghiComponent } from './draghi.component';

describe('DraghiComponent', () => {
  let component: DraghiComponent;
  let fixture: ComponentFixture<DraghiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraghiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
