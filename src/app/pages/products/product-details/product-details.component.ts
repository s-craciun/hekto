import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';
import { ActivatedRoute, Data } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  getStoreProductByIdFeature,
  productStoreFeature,
} from '../../../store/product/product.selectors';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private productId!: string;
  public product$ = new Observable<IProduct | null | undefined>();
  public activeImage?: string = '';

  constructor(private route: ActivatedRoute, private readonly store: Store) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];

    // this.store.select(productStoreFeature).subscribe((products) => {
    //   this.product = products.find((product) => product.id === this.productId);
    // });

    this.product$ = this.store
      .select(getStoreProductByIdFeature(this.productId))
      .pipe(
        tap((product) => {
          this.activeImage = product?.imgPath;
        })
      );

    // this.activeImage = this.product?.imgPath;
  }

  public onClickSetActiveImage(imgPath?: string) {
    this.activeImage = imgPath;
  }
}
