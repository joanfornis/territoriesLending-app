import { TestBed } from '@angular/core/testing';

import { TerritorioDataService } from './territorio-data.service';

describe('TerritorioDataService', () => {
  let service: TerritorioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerritorioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
