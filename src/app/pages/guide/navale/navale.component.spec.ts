import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaleComponent } from './navale.component';

describe('NavaleComponent', () => {
  let component: NavaleComponent;
  let fixture: ComponentFixture<NavaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
