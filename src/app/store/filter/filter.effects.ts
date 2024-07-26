import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { EMPTY, catchError, debounceTime, map, mergeMap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { FilterActions } from './filter.actions';
import { ProductActions } from '../product/product.actions';

@Injectable()
export class FilterEffects {
  setQueryParams$ = createEffect(() =>
    this.action$.pipe(
      ofType(FilterActions.setQueryParams),
      mergeMap(({ queryParams }) => {
        console.log(queryParams);
        return this.productService.getProductsByQuery(queryParams).pipe(
          map((products) => ProductActions.loadProductsFromDB({ products })),
          catchError(() => EMPTY)
        );
      })
    )
  );
  // create effect for fetching
  // will receive a string
  // make req to products
  // update products store from the response

  constructor(
    private action$: Actions,
    private store: Store,
    private productService: ProductService
  ) {}
}
