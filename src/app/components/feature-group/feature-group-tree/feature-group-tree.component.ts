import { Component, Input } from '@angular/core';

import { FeatureGroup } from './../../../models';

@Component({
  selector: 'app-feature-group-tree',
  templateUrl: './feature-group-tree.component.html',
})
export class FeatureGroupTreeComponent {
  @Input() node: FeatureGroup;
  constructor() {}
}
