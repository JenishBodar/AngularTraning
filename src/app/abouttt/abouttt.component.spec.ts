import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutttComponent } from './abouttt.component';

describe('AboutttComponent', () => {
  let component: AboutttComponent;
  let fixture: ComponentFixture<AboutttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutttComponent]
    });
    fixture = TestBed.createComponent(AboutttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
