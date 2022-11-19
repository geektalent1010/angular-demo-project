import { Component, OnInit } from '@angular/core';
import { SelectionService } from 'src/app/services/selection.service';
import { Location } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  items = this.selectionService.getSelectedItems();

  constructor(
    private selectionService: SelectionService,
    private location: Location,
    private productListComponent: ProductListComponent,
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  Clear() {
    this.items = this.selectionService.clearSelectedList();
    this.productListComponent.refreshData();
  }

}
