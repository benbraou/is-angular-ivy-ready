import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { RoutingModule } from './routing.module';
import { ComponentModule } from './components/component.module';
import { FeatureTableService } from './services/feature-table.service';
import { FeatureGroupService } from './services/feature-group.service';
import { IvyApiService } from './services/ivy-api.service';
import { ResponseEnhancerService } from './services/response-enhancer.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'is-angular-ivy-ready' }),
    BrowserAnimationsModule,
    ComponentModule.forRoot(),
    RoutingModule,
    HttpClientModule,
  ],
  providers: [
    LoggerService,
    FeatureTableService,
    FeatureGroupService,
    ResponseEnhancerService,
    IvyApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
