import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogchildComponent } from './blogchild.component';

describe('BlogchildComponent', () => {
  let component: BlogchildComponent;
  let fixture: ComponentFixture<BlogchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogchildComponent]
    });
    fixture = TestBed.createComponent(BlogchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
