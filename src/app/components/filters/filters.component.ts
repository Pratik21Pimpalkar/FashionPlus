import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { filters, singleFilter } from '../../../data/fitlers/filterdata';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';
import { RadioButton } from 'primeng/radiobutton';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-filters',
  imports: [ReactiveFormsModule, CommonModule, Checkbox, FormsModule, DividerModule, RadioButton],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {
  @Input() handleMultipleSelectFilter: any;
  filterData: any;
  singleFilterData: any;
  ngOnInit() {
    this.filterData = filters
    this.singleFilterData = singleFilter
  }
}