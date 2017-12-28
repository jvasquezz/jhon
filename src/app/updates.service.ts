import { Update } from './update';
import { UPDATES } from './updates';
import { Injectable } from '@angular/core';

@Injectable()
export class UpdatesService {

  constructor() { }

  getUpdates(): Update[] {
    return UPDATES;
  }

}
