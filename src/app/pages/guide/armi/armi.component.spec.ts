import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmiComponent } from './armi.component';

describe('ArmiComponent', () => {
  let component: ArmiComponent;
  let fixture: ComponentFixture<ArmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
