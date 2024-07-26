import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProductControlsComponent } from './product-controls/product-controls.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CardComponent } from './card/card.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductControlsComponent,
    ProductFiltersComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CardComponent,
    ProductRatingComponent,
  ],
  imports: [SharedModule, ReactiveFormsModule, ProductsRoutingModule],
  exports: [SharedModule, ReactiveFormsModule, ProductsRoutingModule],
})
export class ProductModule {}
