import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule, ADD_FLEX_STYLES } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { DirectiveModule } from '../directives/directive.module';

import { IvyLinksService } from '../services/ivy-links.service';

import { IvyFullStatusComponent } from './ivy-full-status/ivy-full-status.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StatsSummaryComponent } from './common/stats-summary/stats-summary.component';
import { IvyOverviewComponent } from './ivy-full-status/ivy-overview/ivy-overview.component';
import { UsefulLinksComponent } from './ivy-full-status/ivy-overview/useful-links/useful-links.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { GranularStatusComponent } from './common/granular-status/granular-status.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule, DirectiveModule],
  declarations: [
    IvyFullStatusComponent,
    NavbarComponent,
    StatsSummaryComponent,
    IvyOverviewComponent,
    UsefulLinksComponent,
    FeatureTableComponent,
    GranularStatusComponent,
  ],
  providers: [IvyLinksService, { provide: ADD_FLEX_STYLES, useValue: true }],
  exports: [
    IvyFullStatusComponent,
    NavbarComponent,
    StatsSummaryComponent,
    IvyOverviewComponent,
    UsefulLinksComponent,
    FeatureTableComponent,
    GranularStatusComponent,
    MaterialModule,
  ],
})
export class ComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentModule,
      // anticipate future services
      providers: [],
    };
  }
}
