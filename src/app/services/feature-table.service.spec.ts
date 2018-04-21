import { TestBed, inject } from '@angular/core/testing';

import { FeatureTableService } from './feature-table.service';
import { Feature } from '../models';
import { tableFeaturesFactory } from '../mocks/feature.mock';

describe('[Service] FeatureTable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureTableService],
    });
  });

  describe('getTableColumns', () => {
    it(
      'should return an empty list when provided with empty list of features',
      inject([FeatureTableService], (service: FeatureTableService) => {
        expect(service.getTableColumns([])).toEqual([]);
      })
    );

    it(
      'should handle table features',
      inject([FeatureTableService], (service: FeatureTableService) => {
        const features = tableFeaturesFactory();
        expect(service.getTableColumns(features)).toEqual([
          'Annotation',
          '`defineXXX()`',
          'Run time',
          'Spec',
          'Compiler',
          'Back Patch',
        ]);
      })
    );
  });
});
