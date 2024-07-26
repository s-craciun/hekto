import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, catchError, map, mergeMap, take, withLatestFrom } from 'rxjs';
import { Actions, createEffect } from '@ngrx/effects';

import { productStoreFeature } from './product.selectors';
import { ProductService } from '../../services/product.service';
import { ProductActions } from './product.actions';

@Injectable()
export class ProductEffects {
  loadProductsFromDB$ = createEffect(() =>
    this.action$.pipe(
      take(1),
      withLatestFrom(this.store.select(productStoreFeature)),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => ProductActions.loadProductsFromDB({ products })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private store: Store,
    private productService: ProductService
  ) {}
}
