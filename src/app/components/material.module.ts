import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatCardModule, MatProgressSpinnerModule],
  exports: [MatToolbarModule, MatCardModule, MatProgressSpinnerModule],
})
export class MaterialModule {}
