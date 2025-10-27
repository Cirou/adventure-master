import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratoreArcanoComponent } from './curatore-arcano.component';

describe('CuratoreArcanoComponent', () => {
  let component: CuratoreArcanoComponent;
  let fixture: ComponentFixture<CuratoreArcanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuratoreArcanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuratoreArcanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
