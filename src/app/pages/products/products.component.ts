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
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mensShirt = mensShirt;
    console.log('ActivatedRoute snapshot:', this.activatedRoute.snapshot);
  }

  handleMultipleSelectFilter(value: string, sectionId: string) {
    console.log('handleMultipleSelectFilter called with value:', value, 'and sectionId:', sectionId);

    if (!this.activatedRoute || !this.activatedRoute.snapshot) {
      console.error('ActivatedRoute or snapshot is not defined');
      return;
    }

    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    console.log('Current queryParams:', queryParams);

    let filterValues;
    try {
      filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') : [];
    } catch (error) {
      console.error('Error parsing queryParams:', error);
      return;
    }

    const valueIndex = filterValues.indexOf(value);

    if (valueIndex !== -1) {
      filterValues.splice(valueIndex, 1);
    } else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(',');
    } else {
      delete queryParams[sectionId];
    }

    console.log('Updated queryParams:', queryParams);

    // Navigate to updated query params
    try {
      this.router.navigate([], { queryParams });
    } catch (error) {
      console.error('Error navigating to updated queryParams:', error);
    }
  }
}