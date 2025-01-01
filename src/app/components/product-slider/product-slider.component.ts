import { Component, Input, OnInit } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-slider',
  imports: [ ProductCardComponent],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss'
})
export class ProductSliderComponent  {

  @Input() title: any;
  @Input() products: any;
  
}
