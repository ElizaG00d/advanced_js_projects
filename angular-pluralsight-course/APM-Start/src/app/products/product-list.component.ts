import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./products.service";
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

//class signature
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false; //image not displayed when page first loaded
    //listFilter: string = 'cart';
    errorMessage: string = '';
    sub!: Subscription;

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter');
        this.filterProducts = this.performFilter(value);
    }

    filterProducts: IProduct[] = [];
    products: IProduct[] = [];

    //methods/functions typically placed after the declaration

    constructor(private http: HttpClient) { }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    } //filters list of products with only the product name that includes the list filter string

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    //typescript does need function()
    //function toggles the state of the show image property
    //void is no return

    ngOnInit(): void {
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filterProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
    } //great place to retrieve data

    ngOnDestroy(): void {
        this.sub.unsubscribe();
      }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}

//any[] don't care the data type

