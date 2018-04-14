import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { SpinnerCaptionDirective } from './spinner-caption/spinner-caption.directive';

const DIRECTIVES = [SpinnerCaptionDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class DirectiveModule {}
