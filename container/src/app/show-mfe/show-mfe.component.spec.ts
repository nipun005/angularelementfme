import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMfeComponent } from './show-mfe.component';

describe('ShowMfeComponent', () => {
  let component: ShowMfeComponent;
  let fixture: ComponentFixture<ShowMfeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMfeComponent]
    });
    fixture = TestBed.createComponent(ShowMfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
