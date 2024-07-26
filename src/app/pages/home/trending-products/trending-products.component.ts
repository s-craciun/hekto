import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrl: './trending-products.component.scss',
})
export class TrendingProductsComponent {
  @Input() trendingProducts: IProduct[] | null = [];
}
