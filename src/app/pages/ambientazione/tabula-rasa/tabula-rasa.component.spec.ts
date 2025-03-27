import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulaRasaComponent } from './tabula-rasa.component';

describe('TabulaRasaComponent', () => {
  let component: TabulaRasaComponent;
  let fixture: ComponentFixture<TabulaRasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabulaRasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabulaRasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
