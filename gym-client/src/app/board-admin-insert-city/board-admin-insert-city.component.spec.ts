import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminInsertCityComponent } from './board-admin-insert-city.component';

describe('BoardAdminInsertCityComponent', () => {
  let component: BoardAdminInsertCityComponent;
  let fixture: ComponentFixture<BoardAdminInsertCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminInsertCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminInsertCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
