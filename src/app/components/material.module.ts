import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatInputModule,
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
    MatTableModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
  ],
})
export class MaterialModule {}
