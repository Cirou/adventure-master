import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguaggiComponent } from './linguaggi.component';

describe('LinguaggiComponent', () => {
  let component: LinguaggiComponent;
  let fixture: ComponentFixture<LinguaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinguaggiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinguaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
