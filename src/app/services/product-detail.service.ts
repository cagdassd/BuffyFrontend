import { ProductDetail } from './../models/productDetail';
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private httpClient:HttpClient) { }

  apiUrl2 = 'https://localhost:44357/api/products/getproductdetails'

  getProductDetail(): Observable<ListResponseModel<ProductDetail>> {
    return this.httpClient.get<ListResponseModel<ProductDetail>>(this.apiUrl2)
  }
}
