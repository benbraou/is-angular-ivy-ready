import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Response } from '../models';

const URL = 'https://ivy-status-api.appspot.com/v1/status';

@Injectable()
export class IvyApiService {
  constructor(private http: HttpClient) {}

  getStatus(): Promise<Response> {
    return this.http.get<Response>(URL).toPromise();
  }
}
