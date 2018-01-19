import { Component, HostListener, OnInit } from '@angular/core';
import { Image } from '../image';
import { IMAGES } from '../images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images = IMAGES;

  selectedImage: Image;

  innerWidth: Number;
  isMobile: boolean;
  isDesktop: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.setMobileOrDesktopView(this.innerWidth);
  }

  setMobileOrDesktopView(winWidth) {
    this.isMobile = false;
    this.isDesktop = false;
    if (winWidth < 719) {
      this.isMobile = true;
    } else if (winWidth > 1019) {
      this.isDesktop = true;
    }
  }

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.setMobileOrDesktopView(this.innerWidth);
  }

  onSelect(img: Image): void {
    this.selectedImage = img;
    console.log(this.selectedImage.path);
  }
}
