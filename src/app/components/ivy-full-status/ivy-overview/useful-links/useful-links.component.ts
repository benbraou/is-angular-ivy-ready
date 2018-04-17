import { Component } from '@angular/core';

import { IvyLinksService } from '../../../../services/ivy-links.service';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss'],
})
export class UsefulLinksComponent {
  constructor(private ivyLinksService: IvyLinksService) {}

  get links() {
    return this.ivyLinksService.getIvyLinks();
  }
}
