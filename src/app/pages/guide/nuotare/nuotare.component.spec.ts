import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuotareComponent } from './nuotare.component';

describe('NuotareComponent', () => {
  let component: NuotareComponent;
  let fixture: ComponentFixture<NuotareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuotareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuotareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
