import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
