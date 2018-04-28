import { TestBed, inject } from '@angular/core/testing';

import { FeatureGroupService } from './feature-group.service';
import { tableFeaturesFactory } from '../mocks/feature.mock';

describe('[Service] Feature', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureGroupService],
    });
  });

  describe('getProgressInformation', () => {
    it(
      'should handle empty list of features',
      inject([FeatureGroupService], (service: FeatureGroupService) => {
        expect(service.getProgressInformation([])).toEqual({
          percentage: 0,
          nbrCompleted: 0,
          nbrPending: 0,
        });
      })
    );

    it(
      'should correctly calculate progress information',
      inject([FeatureGroupService], (service: FeatureGroupService) => {
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
