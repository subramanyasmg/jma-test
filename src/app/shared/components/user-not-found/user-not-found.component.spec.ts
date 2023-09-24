import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotFoundComponent } from './user-not-found.component';

describe('UserNotFoundComponent', () => {
  let component: UserNotFoundComponent;
  let fixture: ComponentFixture<UserNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNotFoundComponent]
    });
    fixture = TestBed.createComponent(UserNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});