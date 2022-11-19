import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService : ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      const routeParams = this.route.snapshot.paramMap;
      const codeParam = String(routeParams.get('code'));
      this.product = res?.products.find(product => product.code === codeParam);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
