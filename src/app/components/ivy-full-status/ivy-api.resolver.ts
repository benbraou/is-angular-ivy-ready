import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { IvyApiService } from './../../services/ivy-api.service';
import { Response } from '../../models';
import { ResponseEnhancerService } from '../../services/response-enhancer.service';

const RESPONSE_KEY = makeStateKey<Response>('api.response');

@Injectable()
export class IvyApiResolver {
  private response: Response;
  constructor(
    private apiService: IvyApiService,
    private responseEnhancer: ResponseEnhancerService,
    private readonly transferState: TransferState
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<Response> {
    const keyFound = this.transferState.hasKey(RESPONSE_KEY);
    if (keyFound) {
      // browser mode
      const res = this.transferState.get<Response>(RESPONSE_KEY, null);
      this.transferState.remove(RESPONSE_KEY);
      return Promise.resolve(res);
    }
    this.transferState.onSerialize(RESPONSE_KEY, () => this.response);
    return this.apiService.getStatus().then(rs => {
      this.response = rs;
      this.responseEnhancer.enhance(rs);
      return rs;
    });
  }
}
