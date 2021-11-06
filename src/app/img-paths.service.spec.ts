import { TestBed } from '@angular/core/testing';

import { ImgPathsService } from './img-paths.service';

describe('ImgPathsService', () => {
  let service: ImgPathsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgPathsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
