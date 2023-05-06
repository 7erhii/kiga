import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemedComponent } from './themed.component';

describe('ThemedComponent', () => {
  let component: ThemedComponent;
  let fixture: ComponentFixture<ThemedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemedComponent]
    });
    fixture = TestBed.createComponent(ThemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
