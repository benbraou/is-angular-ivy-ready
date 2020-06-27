import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Response } from '../models';
import { LAST_IVY_RESPONSE } from '../mocks/last-ivy-ready-data';

const URL = 'https://ivy-status-api.appspot.com/v1/status';

@Injectable()
export class IvyApiService {
  constructor(private http: HttpClient) {}

  getStatus(): Promise<Response> {
    // Use the last known response on 27 June 2020, as the Ivy is ready and ivy-status-api is being stopped.
    return Promise.resolve(LAST_IVY_RESPONSE);
  }
}
