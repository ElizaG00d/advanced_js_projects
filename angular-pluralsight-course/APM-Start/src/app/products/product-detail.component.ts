import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
}) //display view as part of the routing
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined; //handling undefined and null
  //undefined until data is retrieved

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    const id =Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
  } //code to read the route param

  onBack(): void {
    this.router.navigate(['/products']);
  } //back button routing


}
