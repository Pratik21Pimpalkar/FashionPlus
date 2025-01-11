import { Component, ViewEncapsulation } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ReviewCardComponent } from '../../components/review-card/review-card.component';
@Component({
  selector: 'app-product-details',
  imports: [RadioButton, ButtonModule, FormsModule, ReviewCardComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent {

  selectedSize: any;

  handleAddToCart() {
    console.log(this.selectedSize);
  }
}
