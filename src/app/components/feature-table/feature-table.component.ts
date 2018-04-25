import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
export class FeatureTableComponent implements OnInit, OnChanges {
  @Input() features: Feature[];

  displayedColumns: string[];
  elementData: FeatureTableRow[];
  dataSource: MatTableDataSource<FeatureTableRow>;

  constructor(private service: FeatureTableService) {}

  ngOnInit() {
    this.buildTableModel();
    this.dataSource.filterPredicate = (
      data: FeatureTableRow,
      filter: string
    ) => {
      return JSON.stringify(data)
        .toLowerCase()
        .includes(filter);
    };
  }

  buildTableModel() {
    this.displayedColumns = this.service.getTableColumns(this.features);
    this.elementData = this.service.getElementData(this.features);
    this.dataSource = new MatTableDataSource(this.elementData);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.features.isFirstChange) {
      this.buildTableModel();
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
