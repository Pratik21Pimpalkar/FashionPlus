import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from "./carousel/carousel.component";
import { ProductSliderComponent } from "./product-slider/product-slider.component";
@Component({
  selector: 'app-home',
  imports: [ButtonModule, CarouselComponent, ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
