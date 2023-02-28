import { ProductDetailService } from './../../services/product-detail.service';
import { ProductDetail } from './../../models/productDetail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetails:ProductDetail[]=[]

  constructor(private productDetailService:ProductDetailService) {}
  
  ngOnInit(): void {
    this.getProductDetails()
  }

  getProductDetails(){
    this.productDetailService.getProductDetail().subscribe(response => {
      this.productDetails = response.data
    });
  }

}
