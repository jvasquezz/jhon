import { Component, OnInit } from '@angular/core';
import { Image } from '../image';
import { IMAGES } from '../images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = IMAGES;

  selectedImage: Image;

  constructor() { }

  ngOnInit() {
  }

  onSelect(img: Image): void {
    this.selectedImage = img;
    console.log(this.selectedImage.path);
  }
}
