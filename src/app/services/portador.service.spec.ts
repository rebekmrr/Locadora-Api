import { TestBed } from '@angular/core/testing';

import {PortadorService} from "./portador.service";

describe('PortadorService', () => {
  let service: PortadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
