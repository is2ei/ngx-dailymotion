import { TestBed } from '@angular/core/testing';

import { NgxDailymotionService } from './ngx-dailymotion.service';

describe('NgxDailymotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDailymotionService = TestBed.get(NgxDailymotionService);
    expect(service).toBeTruthy();
  });
});
