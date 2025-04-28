import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaziaComponent } from './diplomazia.component';

describe('DiplomaziaComponent', () => {
  let component: DiplomaziaComponent;
  let fixture: ComponentFixture<DiplomaziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiplomaziaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomaziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
