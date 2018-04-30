import { Injectable } from '@angular/core';
import { map, compose, reduceBy, concat } from 'ramda';

import { Feature, GranularStatus } from '../models';

export const reduceToElementBy = reduceBy((_, prop) => prop, {});

/**
 * Returns the list of granular statuses of a feature. A fake status is added representing the
 * feature name and the corresponding table column. This will be the basis of displaying a row
 * inside the feature table
 *
 * @param feature An Ivy feature
 */
export const getStatuses = (feature: Feature) => [
  {
    category: feature.status.categories[0],
    code: feature.name,
  },
  ...feature.status.granularStatuses,
];

@Injectable()
export class FeatureTableService {
  /**
   * Checks whether the provided features are part of a table display
   * @param features Ivy features
   */
  isForTableDisplay(features: Feature[]): boolean {
    return (
      features.length > 0 &&
      !!features[0].status.categories &&
      features[0].status.categories.length > 0
    );
  }

  /**
   * Returns the the headers of a feature table.
   * e.g. [Feature, Runtime, Spec, Compiler] will be returned if provided the table below:
   *
   * ## Component Composition
   * | Feature                                  | Runtime | Spec     | Compiler |
   * | ---------------------------------------- | ------- | -------- | -------- |
   * | creation reordering based on injection   |   ❌    |    ❌    |    ✅    |
   * | `class CompA extends CompB {}`           |   ❌    |    ❌    |    ❌    |
   * | `class CompA extends CompB { @Input }`   |   ❌    |    ❌    |    ❌    |
   * | `class CompA extends CompB { @Output }`  |   ❌    |    ❌    |    ❌    |
   *
   * @param features A list of features that are part of the same feature group.
   */
  getTableColumns(features: Feature[]): string[] {
    if (!this.isForTableDisplay(features)) {
      return [];
    }
    return features[0].status.categories;
  }

  /**
   * Returns an array of rows. Each row is an object whose keys are the table column names as explained
   * in https://material.angular.io/components/table/overview
   *
   * @param features A list of features that are part of the same feature group.
   */
  getElementData(features: Feature[]): CategoryToGranularStatus[] {
    return <CategoryToGranularStatus[]>compose(
      map(reduceToElementBy((status: GranularStatus) => status.category)),
      map(getStatuses)
    )(features);
  }
}

export interface FeatureTableRow {
  [index: string]: GranularStatus;
}

export interface CategoryToGranularStatus {
  [key: string]: GranularStatus;
}
