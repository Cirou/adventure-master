import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaComponent } from './posta.component';

describe('PostaComponent', () => {
  let component: PostaComponent;
  let fixture: ComponentFixture<PostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
