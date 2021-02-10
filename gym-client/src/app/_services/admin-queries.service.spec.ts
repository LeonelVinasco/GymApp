import { TestBed } from '@angular/core/testing';

import { AdminQueriesService } from './admin-queries.service';

describe('AdminQueriesService', () => {
  let service: AdminQueriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminQueriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
