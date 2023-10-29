import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsetileComponent } from './responsetile.component';

describe('ResponsetileComponent', () => {
  let component: ResponsetileComponent;
  let fixture: ComponentFixture<ResponsetileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsetileComponent]
    });
    fixture = TestBed.createComponent(ResponsetileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
