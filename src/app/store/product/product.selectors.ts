import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProduct } from '../../interfaces/product.interface';

export const productStoreFeature =
  createFeatureSelector<ReadonlyArray<IProduct>>('productStore');

export const getStoreProductByIdFeature = (productId: string) =>
  createSelector(
    productStoreFeature,
    (allProducts): IProduct | null | undefined => {
      if (!allProducts) {
        
        return null;
      }

      return allProducts.find((product) => product.id === productId);
    }
  );
