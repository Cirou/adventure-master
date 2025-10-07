import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimipassiComponent } from './primipassi.component';

describe('PrimipassiComponent', () => {
  let component: PrimipassiComponent;
  let fixture: ComponentFixture<PrimipassiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimipassiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimipassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
