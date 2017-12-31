import { Injectable } from '@angular/core';
import { Reading } from '../reading';
import { READINGS } from '../reading-list';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReadingService {

  constructor() { }

  getReadings(): Reading[] {
    return READINGS;
  }
}
