import { Component, OnInit } from '@angular/core';
import { OverallStatus } from '../../models';

@Component({
  selector: 'app-ivy-status',
  templateUrl: './ivy-full-status.component.html',
  styleUrls: ['./ivy-full-status.component.scss'],
})
export class IvyFullStatusComponent implements OnInit {
  overallStatus: OverallStatus = {
    progressPercentage: 70,
    nbrFeaturesCompleted: 15,
    nbrFeaturesPending: 10,
  };
  constructor() {}

  ngOnInit() {}
}
