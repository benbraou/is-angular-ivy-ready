import { TestBed, inject } from '@angular/core/testing';

import { FeatureService } from './feature.service';
import { tableFeaturesFactory } from '../mocks/feature.mock';

describe('[Service] Feature', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureService],
    });
  });

  describe('getProgressInformation', () => {
    it(
      'should handle empty list of features',
      inject([FeatureService], (service: FeatureService) => {
        expect(service.getProgressInformation([])).toEqual({
          percentage: 0,
          nbrCompleted: 0,
          nbrPending: 0,
        });
      })
    );

    it(
      'should correctly calculate progress information',
      inject([FeatureService], (service: FeatureService) => {
        const features = tableFeaturesFactory().features;
        expect(service.getProgressInformation(features)).toEqual({
          percentage: 14.29,
          nbrCompleted: 1,
          nbrPending: 6,
        });
      })
    );
  });
});
