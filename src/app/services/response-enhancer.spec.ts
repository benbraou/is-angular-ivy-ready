import { TestBed, inject } from '@angular/core/testing';
import cloneDeep = require('lodash/cloneDeep');

import { ResponseEnhancerService } from './response-enhancer.service';
import {
  RAW_IVY_RESPONSE,
  ENHANCED_IVY_RESPONSE,
} from './../mocks/ivy-api.mock';

describe('[Service] ResponseEnhancerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseEnhancerService],
    });
  });

  describe('enhance', () => {
    it(
      'should update ivy response with overall status and header names',
      inject([ResponseEnhancerService], (service: ResponseEnhancerService) => {
        const response = cloneDeep(RAW_IVY_RESPONSE);
        expect(response).not.toEqual(ENHANCED_IVY_RESPONSE);
        service.enhance(response);
        expect(response).toEqual(ENHANCED_IVY_RESPONSE);
      })
    );
  });
});
