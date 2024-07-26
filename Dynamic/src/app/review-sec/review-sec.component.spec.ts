import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSecComponent } from './review-sec.component';

describe('ReviewSecComponent', () => {
  let component: ReviewSecComponent;
  let fixture: ComponentFixture<ReviewSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
