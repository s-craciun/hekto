import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_URL } from '../constants';
import { IProduct } from '../interfaces/product.interface';
import { IFilter } from '../interfaces/filter.interface';
import { Subject } from 'rxjs';
import { Params } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ProductService {
  public filters = new Subject<IFilter>();

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<IProduct[]>(APP_URL + 'products');
  }

  public getProductsByQuery(queryParam: Params) {
    let params = new HttpParams();

    for (const key in queryParam) {
      params = params.set(key, queryParam[key]);
    }

    return this.http.get<IProduct[]>(APP_URL + 'products', { params });
  }

  public getProductById(productId: string) {
    return this.http.get<IProduct>(APP_URL + `products/${productId}`);
  }
}
