import { NgModule } from '@angular/core';
import { DiscountItemComponent } from './discount-item/discount-item.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { LatestBlogComponent } from './latest-blog/latest-blog.component';
import { LatestProductsComponent } from './latest-products/latest-products.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import { UniqueFeaturesComponent } from './unique-features/unique-features.component';
import { NzModule } from '../../shared/nz.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { SimpleCardComponent } from './simple-card/simple-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    PresentationComponent,
    FeaturedProductsComponent,
    LatestProductsComponent,
    UniqueFeaturesComponent,
    TrendingProductsComponent,
    DiscountItemComponent,
    TopCategoriesComponent,
    SubscribeComponent,
    LatestBlogComponent,
    SimpleCardComponent,
  ],
  imports: [SharedModule],
  exports: [SharedModule],
})
export class HomeModule {}
