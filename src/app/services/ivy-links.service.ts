import { Injectable } from '@angular/core';

import { IvyLink } from '../models';
import { IVY_LINKS } from './../mocks/ivy-links.mock';

@Injectable()
export class IvyLinksService {
  // For the time being, ivy links are hard-coded. I will evaluate in the future if they should be
  // provided by the server
  private ivyLinks: IvyLink[] = Array.from(IVY_LINKS);

  getIvyLinks() {
    return this.ivyLinks;
  }
}
