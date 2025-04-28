import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncantareComponent } from './incantare.component';

describe('IncantareComponent', () => {
  let component: IncantareComponent;
  let fixture: ComponentFixture<IncantareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncantareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncantareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
