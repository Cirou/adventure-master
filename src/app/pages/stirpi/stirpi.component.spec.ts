import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StirpiComponent } from './stirpi.component';

describe('StirpiComponent', () => {
  let component: StirpiComponent;
  let fixture: ComponentFixture<StirpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StirpiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StirpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
