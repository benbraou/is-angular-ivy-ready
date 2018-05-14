import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { environment } from '../environments/environment';

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
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    ComponentModule.forRoot(),
    RoutingModule,
    HttpClientModule,
    BrowserTransferStateModule,
  ],
  providers: [
    LoggerService,
    FeatureTableService,
    FeatureGroupService,
    ResponseEnhancerService,
    IvyApiService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
