import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { DirectiveModule } from '../directives/directive.module';

import { IvyFullStatusComponent } from './ivy-full-status/ivy-full-status.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StatsSummaryComponent } from './common/stats-summary/stats-summary.component';
import { IvyOverviewComponent } from './ivy-full-status/ivy-overview/ivy-overview.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule, DirectiveModule],
  declarations: [
    IvyFullStatusComponent,
    NavbarComponent,
    StatsSummaryComponent,
    IvyOverviewComponent,
  ],
  exports: [
    IvyFullStatusComponent,
    NavbarComponent,
    StatsSummaryComponent,
    IvyOverviewComponent,
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
