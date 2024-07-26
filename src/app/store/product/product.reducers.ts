import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../interfaces/product.interface';
import { ProductActions } from './product.actions';

const initialState: IProduct[] = [];

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsFromDB, (_, { products }) => [...products])
);
