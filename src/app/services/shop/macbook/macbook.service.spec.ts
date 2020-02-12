import { TestBed } from '@angular/core/testing';

import { MacbookService } from './macbook.service';

describe('MacbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MacbookService = TestBed.get(MacbookService);
    expect(service).toBeTruthy();
  });
});
