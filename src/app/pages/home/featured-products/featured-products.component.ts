import { Component, Input } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProduct } from '../../../interfaces/product.interface';
import { Store } from '@ngrx/store';
import { productStoreFeature } from '../../../store/product/product.selectors';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss',
})
export class FeaturedProductsComponent {
  @Input() featuredProducts: IProduct[] | null = [];
}
