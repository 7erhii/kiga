import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversityComponent } from './diversity.component';

describe('DiversityComponent', () => {
  let component: DiversityComponent;
  let fixture: ComponentFixture<DiversityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiversityComponent]
    });
    fixture = TestBed.createComponent(DiversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
