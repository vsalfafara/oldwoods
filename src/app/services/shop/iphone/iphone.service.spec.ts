import { TestBed } from '@angular/core/testing';

import { IphoneService } from './iphone.service';

describe('IphoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IphoneService = TestBed.get(IphoneService);
    expect(service).toBeTruthy();
  });
});
