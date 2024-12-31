import { Component, Input } from '@angular/core';
import { HomeProductCardComponent } from '../home-product-card/home-product-card.component';

@Component({
  selector: 'app-product-card',
  imports: [HomeProductCardComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() item: any
}
