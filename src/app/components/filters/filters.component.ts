import { Component, inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { filters, singleFilter } from '../../../data/fitlers/filterdata';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';
import { RadioButton } from 'primeng/radiobutton';
import { CommonModule, } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-filters',
  imports: [ReactiveFormsModule, CommonModule, Checkbox, FormsModule, DividerModule, RadioButton],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);


  filterData: any;
  singleFilterData: any;

  ngOnInit() {
    this.filterData = filters
    this.singleFilterData = singleFilter
  }

  handleMultipleSelectFilter(value: string, sectionId: string) {
    if (!this.activatedRoute || !this.activatedRoute.snapshot) {
      console.error('ActivatedRoute or snapshot is not defined');
      return;
    }

    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    console.log('Current queryParams:', queryParams);

    let filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') : [];
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
    this.router.navigate([], { queryParams });

  }

  handleSingleSelectFilter(value: string, sectionId: string) {
    if (!this.activatedRoute || !this.activatedRoute.snapshot) {
      console.error('ActivatedRoute or snapshot is not defined');
      return;
    }
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[sectionId] = value;
    this.router.navigate([], { queryParams });
  }
}