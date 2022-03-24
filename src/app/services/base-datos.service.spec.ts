import { TestBed } from '@angular/core/testing';

import { BaseDatosService } from './base-datos.service';

describe('BaseDatosService', () => {
  let service: BaseDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
