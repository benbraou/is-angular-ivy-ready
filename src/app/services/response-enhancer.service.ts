import { Injectable } from '@angular/core';
import { Response, OverallStatus, FeatureGroup } from '../models';

@Injectable()
export class ResponseEnhancerService {
  public enhance(response: Response): void {
    const overallStatus: OverallStatus = {
      nbrFeaturesCompleted: 0,
      nbrFeaturesPending: 0,
      progressPercentage: 0,
    };
    if (!response.data) {
      return;
    }
    const root = response.data.featureGroup;
    this._process(root, overallStatus, []);
    this._updateGlobalPercentage(overallStatus);
    response.data.overallStatus = overallStatus;
  }

  private _updateGlobalPercentage(overallStatus: OverallStatus): void {
    const nbrFeatures =
      overallStatus.nbrFeaturesCompleted + overallStatus.nbrFeaturesPending;
    overallStatus.progressPercentage = +(
      overallStatus.nbrFeaturesCompleted *
      100 /
      Math.max(nbrFeatures, 1)
    ).toFixed(2);
  }

  private _process(
    root: FeatureGroup,
    overallStatus: OverallStatus,
    hierarchy: number[]
  ): void {
    if (!root.data) {
      return;
    }
    root.data.nameAsHeader =
      hierarchy.length === 0
        ? root.data.name
        : `${hierarchy.join('.')}. ${root.data.name}`;
    if (root.data && root.data.features) {
      root.data.features.forEach(feature => {
        if (feature.status.completed) {
          overallStatus.nbrFeaturesCompleted += 1;
        } else {
          overallStatus.nbrFeaturesPending += 1;
        }
      });
    }
    if (!!root.featureGroups) {
      root.featureGroups.forEach((fg, index) => {
        const newHierarchy = [...hierarchy, index + 1];
        this._process(fg, overallStatus, newHierarchy);
      });
    }
  }
}
