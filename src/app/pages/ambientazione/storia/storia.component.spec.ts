import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriaComponent } from './storia.component';

describe('StoriaComponent', () => {
  let component: StoriaComponent;
  let fixture: ComponentFixture<StoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
