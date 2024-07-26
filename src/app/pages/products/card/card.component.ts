import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardView!: string;
  @Input({ required: true }) product!: IProduct;

  constructor() {}

  public setStarClass(n: number) {
    return 'rating-star' + ' ' + (this.product.rating >= n && 'rated');
  }
}
