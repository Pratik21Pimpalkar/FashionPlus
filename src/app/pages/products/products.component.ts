import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { FiltersComponent } from '../../components/filters/filters.component';
import { mensShirt } from '../../../data/Mens/mensShirt';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [DividerModule, FiltersComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  mensShirt: any[] = [];
  ngOnInit(): void {
    this.mensShirt = mensShirt;
  }
}