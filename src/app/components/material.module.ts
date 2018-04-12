import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatCardModule],
  exports: [MatToolbarModule, MatCardModule],
})
export class MaterialModule {}
