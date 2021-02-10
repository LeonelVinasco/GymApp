import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminListUsersComponent } from './board-admin-list-users.component';

describe('BoardAdminListUsersComponent', () => {
  let component: BoardAdminListUsersComponent;
  let fixture: ComponentFixture<BoardAdminListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminListUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
