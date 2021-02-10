import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminInsertGymComponent } from './board-admin-insert-gym.component';

describe('BoardAdminInsertGymComponent', () => {
  let component: BoardAdminInsertGymComponent;
  let fixture: ComponentFixture<BoardAdminInsertGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminInsertGymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminInsertGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
