import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GildeConquisteComponent } from './gilde-conquiste.component';

describe('GildeConquisteComponent', () => {
  let component: GildeConquisteComponent;
  let fixture: ComponentFixture<GildeConquisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GildeConquisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GildeConquisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
