import { TestBed } from '@angular/core/testing';

import { SortedMoviesListService } from './sorted-movies-list.service';

describe('SortedMoviesListService', () => {
  let service: SortedMoviesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortedMoviesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
