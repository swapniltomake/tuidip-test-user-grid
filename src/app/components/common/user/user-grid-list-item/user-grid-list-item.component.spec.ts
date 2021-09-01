import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGridListItemComponent } from './user-grid-list-item.component';

describe('UserGridListItemComponent', () => {
  let component: UserGridListItemComponent;
  let fixture: ComponentFixture<UserGridListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGridListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGridListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
