import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrl: './product-rating.component.scss',
})
export class ProductRatingComponent {
  @Input({ required: true }) rating!: number;

  public setStarClass(n: number) {
    return 'rating-star' + ' ' + (this.rating >= n && 'rated');
  }
}
