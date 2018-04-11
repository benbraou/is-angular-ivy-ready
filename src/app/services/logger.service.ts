import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

abstract class Logger {
  public abstract info(...messages): void;
  public abstract warn(...messages): void;
  public abstract error(...messages): void;
}

/**
 * ProductionLogger will not log anything to the console
 */
class ProductionLogger extends Logger {
  public info(...messages: any[]): void {}
  public warn(...messages: any[]): void {}
  public error(...messages: any[]): void {}
}

class DevelopmentLogger extends Logger {
  // todo spread operator
  public info(...messages: any[]): void {
    /* tslint:disable */
    console.info.apply(console, messages);
  }
  public warn(...messages: any[]): void {
    /* tslint:disable */
    console.warn.apply(console, messages);
  }
  public error(...messages: any[]): void {
    /* tslint:disable */
    console.error.apply(console, messages);
  }
}

class LoggerFactory {
  private constructor() {}
  static getLogger(): Logger {
    if (isDevMode()) {
      return new DevelopmentLogger();
    }
    return new ProductionLogger();
  }
}

@Injectable()
export class LoggerService {
  private logger: Logger = LoggerFactory.getLogger();

  public info(...messages: any[]): void {
    this.logger.info.apply(this, messages);
  }

  public warn(...messages: any[]): void {
    this.logger.warn.apply(this, messages);
  }

  public error(...messages: any[]): void {
    this.logger.error.apply(this, messages);
  }
}
