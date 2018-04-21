import { Injectable } from '@angular/core';

import { Feature } from '../models';

@Injectable()
export class FeatureTableService {
  isForTableDisplay(features: Feature[]): boolean {
    return (
      features.length > 0 &&
      !!features[0].status.categories &&
      features[0].status.categories.length > 0
    );
  }

  getTableColumns(features: Feature[]): string[] {
    if (!this.isForTableDisplay(features)) {
      return [];
    }
    // all features of a same feature group share the same categories. e.g.
    // ## Component Composition
    // | Feature                                  | Runtime | Spec     | Compiler |
    // | ---------------------------------------- | ------- | -------- | -------- |
    // | creation reordering based on injection   |   ❌    |    ❌    |    ✅    |
    // | `class CompA extends CompB {}`           |   ❌    |    ❌    |    ❌    |
    // | `class CompA extends CompB { @Input }`   |   ❌    |    ❌    |    ❌    |
    // | `class CompA extends CompB { @Output }`  |   ❌    |    ❌    |    ❌    |
    //
    // The categories are in this case: [Feature, Runtime, Spec, Compiler]
    return features[0].status.categories;
  }
}
