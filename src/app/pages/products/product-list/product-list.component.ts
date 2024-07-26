import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { IProduct } from '../../../interfaces/product.interface';
import { productStoreFeature } from '../../../store/product/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  @Input() view!: string;
  public products$!: Observable<IProduct[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store
      .select(productStoreFeature)
      .pipe(map((productStore) => [...productStore]));
  }
}
