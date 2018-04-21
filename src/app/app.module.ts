import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { RoutingModule } from './routing.module';
import { ComponentModule } from './components/component.module';
import { FeatureTableService } from './services/feature-table.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'is-angular-ivy-ready' }),
    BrowserAnimationsModule,
    ComponentModule.forRoot(),
    RoutingModule,
  ],
  providers: [LoggerService, FeatureTableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
