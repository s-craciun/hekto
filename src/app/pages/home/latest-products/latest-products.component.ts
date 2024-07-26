import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrl: './latest-products.component.scss',
})
export class LatestProductsComponent {
  @Input() latestProducts: IProduct[] | null = [];
}
