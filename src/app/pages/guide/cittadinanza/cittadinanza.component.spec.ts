import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CittadinanzaComponent } from './cittadinanza.component';

describe('CittadinanzaComponent', () => {
  let component: CittadinanzaComponent;
  let fixture: ComponentFixture<CittadinanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CittadinanzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CittadinanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
