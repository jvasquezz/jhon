import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Jhonatan';
  last = 'Vasquez';

  votes = 997;
  innerWidth: Number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  castVote(castedVote): void {
    this.votes = this.votes + castedVote;
  }
}
