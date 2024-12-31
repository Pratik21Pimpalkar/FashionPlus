import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from "./carousel/carousel.component";
import { ProductSliderComponent } from "./product-slider/product-slider.component";
import { mensJens } from '../../data/Mens/mensJeans';
import { mensShirt } from '../../data/Mens/mensShirt';
import { mensKurta } from '../../data/Mens/mensKurta';
import { dress } from '../../data/women/dress';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, CarouselComponent, ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  mensShirt: any
  mensKurta: any
  dress: any
  menJeans: any;
  ngOnInit(): void {
    this.menJeans = mensJens.slice(0, 5)
    this.mensShirt = mensShirt.slice(0, 5)
    this.dress = dress.slice(0, 5)
    this.mensKurta = mensKurta.slice(0, 5)
  }
}