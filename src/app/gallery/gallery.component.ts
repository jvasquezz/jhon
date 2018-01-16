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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  onSelect(img: Image): void {
    this.selectedImage = img;
    console.log(this.selectedImage.path);
  }
}
