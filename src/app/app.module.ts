import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { RoutingModule } from './routing.module';
import { ComponentModule } from './components/component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'is-angular-ivy-ready' }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    ComponentModule.forRoot(),
    RoutingModule,
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
