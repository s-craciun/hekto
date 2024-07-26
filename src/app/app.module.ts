import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { HeaderControlsComponent } from './components/header/header-controls/header-controls.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FooterComponent } from './components/footer/footer.component';
import { HomeModule } from './pages/home/home.module';
import { NzModule } from './shared/nz.module';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { ProductModule } from './pages/products/products.module';
import { reducers } from './store/app.store';
import { ProductEffects } from './store/product/product.effects';
import { FilterEffects } from './store/filter/filter.effects';
import { RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/cart/product/product.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HeaderControlsComponent,
    FooterComponent,
    CartComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    ProductModule,
    RouterModule,
    NzModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects, FilterEffects]),
  ],
  providers: [provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
