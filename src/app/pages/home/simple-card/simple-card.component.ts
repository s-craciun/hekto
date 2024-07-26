import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';

type CardType = 'featured' | 'latest' | 'trending';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.scss',
})
export class SimpleCardComponent {
  @Input({ required: true }) product!: IProduct;
  @Input() cardType: CardType = 'featured';
}
