import { createActionGroup, props } from '@ngrx/store';
import { IProduct } from '../../interfaces/product.interface';

export enum NGRXProductSource {
  ProductSource = 'Product Source',
}

export enum NGRXProductType {
  loadProductsFromDB = 'Load Products From DB',
}

export const ProductActions = createActionGroup({
  source: NGRXProductSource.ProductSource,
  events: {
    [NGRXProductType.loadProductsFromDB]: props<{ products: IProduct[] }>(),
  },
});
