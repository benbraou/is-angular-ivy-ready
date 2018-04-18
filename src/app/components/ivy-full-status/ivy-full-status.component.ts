import { Component, OnInit } from '@angular/core';
import { OverallStatus } from '../../models';

@Component({
  selector: 'app-ivy-status',
  template: `
    <app-ivy-overview
      [title] = "title"
      [percentage]="overallStatus.progressPercentage"
      [nbrCompleted]="overallStatus.nbrFeaturesCompleted"
      [nbrPending]="overallStatus.nbrFeaturesPending">
    </app-ivy-overview>
  `,
})
export class IvyFullStatusComponent implements OnInit {
  title = 'Overall status';
  overallStatus: OverallStatus = {
    progressPercentage: 70,
    nbrFeaturesCompleted: 15,
    nbrFeaturesPending: 10,
  };
  constructor() {}

  ngOnInit() {}
}
