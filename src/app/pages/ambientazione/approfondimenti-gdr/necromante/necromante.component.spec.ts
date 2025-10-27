import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecromanteComponent } from './necromante.component';

describe('NecromanteComponent', () => {
  let component: NecromanteComponent;
  let fixture: ComponentFixture<NecromanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NecromanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NecromanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
