import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { DirectiveModule } from '../directives/directive.module';

import { IvyFullStatusComponent } from './ivy-full-status/ivy-full-status.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverallStatusComponent } from './overall-status/overall-status.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule, DirectiveModule],
  declarations: [
    IvyFullStatusComponent,
    NavbarComponent,
    OverallStatusComponent,
  ],
  exports: [
    IvyFullStatusComponent,
    NavbarComponent,
    OverallStatusComponent,
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
