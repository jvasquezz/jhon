import { Reading } from '../reading';
import { Component, OnInit } from '@angular/core';
import { ReadingService } from '../services/reading.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

  readings: Reading[];

  constructor(private readingService: ReadingService) { }

  ngOnInit() {
    this.getReadings();
  }

  getReadings(): void {
    this.readings = this.readingService.getReadings();
  }
}
