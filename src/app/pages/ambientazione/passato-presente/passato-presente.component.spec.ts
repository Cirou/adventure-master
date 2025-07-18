import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassatoPresenteComponent } from './passato-presente.component';

describe('PassatoPresenteComponent', () => {
  let component: PassatoPresenteComponent;
  let fixture: ComponentFixture<PassatoPresenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassatoPresenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassatoPresenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
