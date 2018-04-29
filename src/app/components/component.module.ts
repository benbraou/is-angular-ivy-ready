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
import { GranularFeatureGroupComponent } from './feature-group/granular-feature-group/granular-feature-group.component';
import { FeatureGroupOverviewComponent } from './feature-group/feature-group-overview/feature-group-overview.component';
import { FeatureLinesComponent } from './feature-lines/feature-lines.component';
import { FeatureGroupTreeComponent } from './feature-group/feature-group-tree/feature-group-tree.component';
import { FooterComponent } from './../components/footer/footer.component';
import { GithubLinkComponent } from './common/github-link/github-link.component';

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
    GranularFeatureGroupComponent,
    FeatureGroupOverviewComponent,
    FeatureLinesComponent,
    FeatureGroupTreeComponent,
    GithubLinkComponent,
    FooterComponent,
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
    GranularFeatureGroupComponent,
    FeatureGroupOverviewComponent,
    FeatureLinesComponent,
    FeatureGroupTreeComponent,
    GithubLinkComponent,
    FooterComponent,
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
