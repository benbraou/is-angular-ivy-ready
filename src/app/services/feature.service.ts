import { Injectable } from '@angular/core';
import { filter, pipe, length } from 'ramda';

import { Feature } from '../models';

@Injectable()
export class FeatureService {
  getProgressInformation(features: Feature[]): FeatureProgress {
    if (features.length === 0) {
      return {
        nbrCompleted: 0,
        nbrPending: 0,
        percentage: 0,
      };
    }
    const isCompleted = (feature: Feature) => feature.status.completed;
    const nbrCompleted = pipe(<any>filter(isCompleted), length)(features);
    const nbrPending = features.length - nbrCompleted;
    const percentage = +(nbrCompleted * 100 / features.length).toFixed(2);
    return {
      nbrCompleted,
      nbrPending,
      percentage,
    };
  }
}

export interface FeatureProgress {
  percentage: number;
  nbrCompleted: number;
  nbrPending: number;
}
