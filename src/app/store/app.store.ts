import { ActionReducerMap } from '@ngrx/store';
import { IProduct } from '../interfaces/product.interface';
import { productReducer } from './product/product.reducers';
import { IFilter } from '../interfaces/filter.interface';

enum AppStateEntities {
  productStore = 'productStore',
}

interface AppState {
  [AppStateEntities.productStore]: IProduct[];
}

export const reducers: ActionReducerMap<AppState> = {
  [AppStateEntities.productStore]: productReducer,
};

export { AppStateEntities, AppState };
