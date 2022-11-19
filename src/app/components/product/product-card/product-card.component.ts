import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionService } from 'src/app/services/selection.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any = null;
  @Input() selected: boolean = false;

  buttonLabel:string = "Select";
  showPreview:boolean = false;
  
  constructor(
    private router: Router,
    private selectionService: SelectionService,
  ) {  }

  ngOnInit(): void {
    if (this.selectionService.getSelectedItems().some(e => e.code === this.product.code)) {
      this.selected = true;
      this.buttonLabel = "Cancel";
    }   
    else {
      this.selected = false;
      this.buttonLabel = "Select";
    } 
    
    if (this.selectionService.getPreviewItems().some(e => e.code === this.product.code)) {
      this.showPreview = true;
    }   
    else {
      this.showPreview = false;
    } 
  }

  togglePreview() {
    this.showPreview = !this.showPreview;
    if (this.showPreview) {
      this.selectionService.PreviewShow(this.product);
    }
    else {
      this.selectionService.PreviewHide(this.product);
    }
  }

  showDetail() {
    this.router.navigateByUrl('/detail/' + this.product.code);
  }

  change(){
    this.selected = !this.selected
    if (this.selected) {
      this.selectionService.addToSelctedList(this.product);
      this.buttonLabel = "Cancel";      
    }
    else {
      this.selectionService.removeFromSelectedList(this.product);
      this.buttonLabel = "Select";
    }
    
  }

}
