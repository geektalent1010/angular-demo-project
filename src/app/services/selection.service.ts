import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  selectedItems: Array<any> = [];
  previewedItems: Array<any> = [];

  constructor() { }

  getSelectedItems() {
    return this.selectedItems;
  }

  addToSelctedList(product:any) {
    this.selectedItems.push(product);
  }

  clearSelectedList() {
    this.selectedItems = [];
    return this.selectedItems;
  }

  removeFromSelectedList(product:any) {
    this.selectedItems.splice(this.selectedItems.indexOf(product),1);
  }

  getPreviewItems() {
    return this.previewedItems;
  }

  PreviewShow(product: any) {
    this.previewedItems.push(product);
  }

  PreviewHide(product: any) {
    this.previewedItems.splice(this.previewedItems.indexOf(product),1);
  }
}
