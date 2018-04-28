import { Component, OnInit } from '@angular/core';
import { OverallStatus } from '../../models';
import { tableFeaturesFactory } from '../../mocks/feature.mock';

@Component({
  selector: 'app-ivy-status',
  template: `
    <app-ivy-overview
      [title] = "title"
      [percentage]="overallStatus.progressPercentage"
      [nbrCompleted]="overallStatus.nbrFeaturesCompleted"
      [nbrPending]="overallStatus.nbrFeaturesPending">
    </app-ivy-overview>
    <div style="margin:10px"></div>
    <app-granular-feature-group [features]="features" [name]="'Decorators'"></app-granular-feature-group>
  `,
})
export class IvyFullStatusComponent implements OnInit {
  title = 'Overall status';
  features = tableFeaturesFactory().features;
  overallStatus: OverallStatus = {
    progressPercentage: 70,
    nbrFeaturesCompleted: 15,
    nbrFeaturesPending: 10,
  };
  constructor() {}

  ngOnInit() {}
}
