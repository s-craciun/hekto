import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  public view: string = 'list';

  public changeView(view: string) {
    this.view = view;
  }
}
