import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultistiComponent } from './cultisti.component';

describe('CultistiComponent', () => {
  let component: CultistiComponent;
  let fixture: ComponentFixture<CultistiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultistiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultistiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
