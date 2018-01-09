import { Component, OnInit } from '@angular/core';
import { Update } from '../update';
import { UpdatesService } from '../services/updates.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  constructor(private updatesService: UpdatesService) { }

  updates: Update[];

  ngOnInit() {
    this.getUpdates();
  }

  getUpdates(): void {
    this.updates = this.updatesService.getUpdates();
  }
}
