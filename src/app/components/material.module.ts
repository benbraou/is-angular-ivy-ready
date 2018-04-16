import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDividerModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
})
export class MaterialModule {}
