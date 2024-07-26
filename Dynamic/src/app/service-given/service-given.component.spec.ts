import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGivenComponent } from './service-given.component';

describe('ServiceGivenComponent', () => {
  let component: ServiceGivenComponent;
  let fixture: ComponentFixture<ServiceGivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceGivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceGivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
