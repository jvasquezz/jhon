import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature',
  template: `
  <div [ngClass]="innerWidth > 1019? 'desktop': 'mobile'" id="footer">
  <footer style="text-align:center;">
    <div class="outer" style="position:relative;text-align:center;">
      <div class="inner">
        <img src="assets/00111.jpg" style="border-radius:50%;max-width:100px;">
        <div class="text"><pre><b>Greetings</b></pre></div>
    </div>
    </div>
    <pre style="float:center;">
- Jon Diaz -
<b>Full stack developer</b>
Computer vision and competitive programmer
<b><ng-content></ng-content></b>
    </pre>
  </footer>
</div>
`,
  styleUrls: ['./signature.component.scss'],
})
export class SignatureComponent implements OnInit {

  constructor() { }

  innerWidth: Number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

}
