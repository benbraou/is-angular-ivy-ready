import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IvyStatusComponent } from './ivy-status/ivy-status.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverallStatusComponent } from './overall-status/overall-status.component';
import { MaterialModule } from './material.module';
import { DirectiveModule } from '../directives/directive.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule, DirectiveModule],
  declarations: [IvyStatusComponent, NavbarComponent, OverallStatusComponent],
  exports: [IvyStatusComponent, NavbarComponent, OverallStatusComponent],
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
