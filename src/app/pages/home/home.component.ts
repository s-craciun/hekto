import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { IProduct } from '../../interfaces/product.interface';
import { productStoreFeature } from '../../store/product/product.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public featuredProducts$ = new Observable<IProduct[]>();
  public latestProducts$ = new Observable<IProduct[]>();
  public trendingProducts$ = new Observable<IProduct[]>();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.featuredProducts$ = this.store
      .select(productStoreFeature)
      .pipe(
        map((productStore) =>
          productStore.filter((product) => product.types.includes('featured'))
        )
      );

    this.latestProducts$ = this.store
      .select(productStoreFeature)
      .pipe(
        map((productStore) =>
          productStore.filter((product) => product.types.includes('new'))
        )
      );

    this.trendingProducts$ = this.store
      .select(productStoreFeature)
      .pipe(
        map((productStore) =>
          productStore.filter((product) => product.types.includes('trending'))
        )
      );
  }
}
