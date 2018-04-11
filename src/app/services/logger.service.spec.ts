import { enableProdMode } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('[service] LoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService],
    });
    spyOn(console, 'info');
    spyOn(console, 'warn');
    spyOn(console, 'error');
  });

  it(
    'should be correctly injected',
    inject([LoggerService], (service: LoggerService) => {
      expect(service).toBeTruthy();
    })
  );

  describe('Development mode', () => {
    it(
      'should correctly log info messages',
      inject([LoggerService], (service: LoggerService) => {
        service.info('hello');
        expect(console.info).toHaveBeenCalledTimes(1);
        expect(console.warn).toHaveBeenCalledTimes(0);
        expect(console.error).toHaveBeenCalledTimes(0);
      })
    );

    it(
      'should correctly log warning messages',
      inject([LoggerService], (service: LoggerService) => {
        service.warn('world');
        service.warn('world');
        expect(console.info).toHaveBeenCalledTimes(0);
        expect(console.warn).toHaveBeenCalledTimes(2);
        expect(console.error).toHaveBeenCalledTimes(0);
      })
    );

    it(
      'should correctly log error messages',
      inject([LoggerService], (service: LoggerService) => {
        service.error('!');
        service.error('!');
        service.error('!');
        expect(console.info).toHaveBeenCalledTimes(0);
        expect(console.warn).toHaveBeenCalledTimes(0);
        expect(console.error).toHaveBeenCalledTimes(3);
      })
    );
  });
});
