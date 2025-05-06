import { TestBed } from '@angular/core/testing';

import { ProdottoService } from './prodotto.service';

describe('ProductService', () => {
  let service: ProdottoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
