export class ProductModel {
    products: Array<any>;
    pagination: any;
    sorts: Array<any>;
    facets: Array<any>;
    promotionBanners: Array<any>;

    constructor() {
        this.products = [];
        this.pagination = {};
        this.sorts = [];
        this.facets = [];
        this.promotionBanners = [];
    }
    
}