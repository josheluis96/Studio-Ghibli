import { TestBed } from '@angular/core/testing';

import { GhibliApi } from './ghibli-api';

describe('GhibliApi', () => {
  let service: GhibliApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhibliApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
