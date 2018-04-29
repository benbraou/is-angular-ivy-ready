import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IvyApiService } from './../../services/ivy-api.service';
import { Response } from '../../models';
import { ResponseEnhancerService } from '../../services/response-enhancer.service';

@Injectable()
export class IvyApiResolver {
  constructor(
    private apiService: IvyApiService,
    private responseEnhancer: ResponseEnhancerService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<Response> {
    return this.apiService.getStatus().then(rs => {
      this.responseEnhancer.enhance(rs);
      return rs;
    });
  }
}
