import { Component, HostListener, OnInit } from '@angular/core';
import { Image } from '../image';
import { IMAGES } from '../images';
import { DesktopOrMobileView } from '../desktop-or-mobile';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images = IMAGES;

  selectedImage: Image;

  deskMobile: DesktopOrMobileView;
  isMobile: boolean;
  isDesktop: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.deskMobile.setView(window.innerWidth);
  }

  constructor() {
    this.deskMobile = DesktopOrMobileView.NewInstance(false);
  }

  ngOnInit() {
    this.deskMobile.setView(window.innerWidth);
  }

  onSelect(img: Image): void {
    this.selectedImage = img;
    console.log(this.selectedImage.path);
  }
}
