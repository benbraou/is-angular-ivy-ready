import { Component, OnInit } from '@angular/core';
import { OverallStatus } from '../../models';

@Component({
  selector: 'app-ivy-status',
  templateUrl: './ivy-status.component.html',
  styleUrls: ['./ivy-status.component.scss'],
})
export class IvyStatusComponent implements OnInit {
  overallStatus: OverallStatus = {
    progressPercentage: 70,
    nbrFeaturesCompleted: 15,
    nbrFeaturesPending: 10,
  };
  constructor() {}

  ngOnInit() {}
}
