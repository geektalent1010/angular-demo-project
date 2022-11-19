import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { SelectionService } from 'src/app/services/selection.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = [];
  currentPage = 1;
  selectedItems: any = [];
  
  constructor(    
    private productService : ProductService,
    private selectionService: SelectionService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
    });
  }

  refreshData() {
    this.selectedItems = this.selectionService.getSelectedItems();
    this.products = this.products.map((product : any, idx: number) => {
      return {
        ...product, selected: this.selectedItems[idx]
      }
    })
  }

  handlePageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

}
