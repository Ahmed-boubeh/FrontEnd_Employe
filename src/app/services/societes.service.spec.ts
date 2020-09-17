import { TestBed } from '@angular/core/testing';

import { SocietesService } from './societes.service';

describe('SocietesService', () => {
  let service: SocietesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocietesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
