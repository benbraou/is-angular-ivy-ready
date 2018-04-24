import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import {
  FeatureTableService,
  FeatureTableRow,
} from './../../services/feature-table.service';
import { Feature, GranularStatus } from '../../models';

@Component({
  selector: 'app-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss'],
})
export class FeatureTableComponent implements OnInit {
  @Input() features: Feature[];

  displayedColumns: string[];
  elementData: FeatureTableRow[];
  dataSource: MatTableDataSource<FeatureTableRow>;

  constructor(private service: FeatureTableService) {}

  ngOnInit() {
    this.displayedColumns = this.service.getTableColumns(this.features);
    this.elementData = this.service.getElementData(this.features);
    this.dataSource = new MatTableDataSource(this.elementData);
    this.dataSource.filterPredicate = (
      data: FeatureTableRow,
      filter: string
    ) => {
      return JSON.stringify(data)
        .toLowerCase()
        .includes(filter);
    };
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
