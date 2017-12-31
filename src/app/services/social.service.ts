import { Injectable } from '@angular/core';
import { Website } from '../website';
import { WEBSITES } from '../websites';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocialService {

  constructor() { }

  getWebsites(): Website[] {
    return WEBSITES;
  }
}
