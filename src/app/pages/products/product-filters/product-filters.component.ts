import { Component, OnInit } from '@angular/core';
import {
  Brands,
  Categories,
  IFilter,
  PriceRange,
} from '../../../interfaces/filter.interface';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FilterActions } from '../../../store/filter/filter.actions';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss',
})
export class ProductFiltersComponent implements OnInit {
  public filter: IFilter = {
    brand: [
      Brands.CASIO,
      Brands.APPLE,
      Brands.SONY,
      Brands.NIKE,
      Brands.VKE,
      Brands.GLOSSINESS,
    ],
    discount: [20, 5, 25],
    rating: [1, 2, 3, 4, 5],
    category: [
      Categories.WATCHES,
      Categories.HEADPHONES,
      Categories.LAPTOP,
      Categories.GAME_CONSOLE,
      Categories.CLOTHE,
      Categories.JEWELRY,
      Categories.PERFUME,
    ],
    priceRange: [
      { from: 0 },
      { from: 0, to: 150 },
      { from: 150, to: 350 },
      { from: 350, to: 500 },
      { from: 500, to: 800 },
      { from: 800 },
    ],
  };
  public filterForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private readonly store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initFilterForm();

    this.filterForm.valueChanges.subscribe((value) => {
      const params: Params = {};

      const filterFormValue = Object.assign({}, value, {
        brand: this.handleFormFields(value.brand, 'brand'),
        discount: this.handleFormFields(value.discount, 'discount'),
        rating: this.handleFormFields(value.rating, 'rating'),
        category: this.handleFormFields(value.category, 'category'),
        priceRange: value.priceRange,
      });

      for (const key in filterFormValue) {
        if (
          Array.isArray(filterFormValue[key]) &&
          !filterFormValue[key].length
        ) {
          continue;
        }

        if (key === 'priceRange') {
          params['priceFrom'] = filterFormValue[key].from;

          if (filterFormValue[key].to) {
            params['priceTo'] = filterFormValue[key].to;
          }
        } else {
          params[key] = filterFormValue[key].join(',');
        }
      }

      this.store.dispatch(
        FilterActions.setQueryParams({ queryParams: params })
      );

      // this.router.navigate([], {
      //   relativeTo: this.route,
      //   queryParams: params,
      //   queryParamsHandling: 'merge',
      // });
    });
  }

  private handleFormFields(fieldValue: boolean[], control: keyof IFilter) {
    return fieldValue
      .map((selected: boolean, index: number) => {
        return selected && this.filter[control][index];
      })
      .filter(Boolean);
  }

  public setStarClass(index: number, count: number) {
    return 'rating-star' + ' ' + (index + 1 >= count && 'rated');
  }

  public renderPriceRange(pricePair: PriceRange) {
    let priceRange = '$' + pricePair.from;

    if (!pricePair.to) {
      priceRange += '+';
    } else {
      priceRange += ' - $' + pricePair.to;
    }

    return priceRange;
  }

  public getControls(control: string) {
    this.filterForm.get('priceRange');
    return (this.filterForm.get(control) as FormArray).controls;
  }

  private buildControls(control: keyof IFilter) {
    const params = this.route.snapshot.queryParams;

    return this.formBuilder.array(
      this.filter[control].map((value) => {
        if (!params[control]?.includes(value)) {
          return this.formBuilder.control(false);
        }

        return this.formBuilder.control(true);
      })
    );
  }

  private initFilterForm() {
    this.filterForm = this.formBuilder.group({
      brand: this.buildControls('brand'),
      discount: this.buildControls('discount'),
      rating: this.buildControls('rating'),
      category: this.buildControls('category'),
      priceRange: this.filter.priceRange[0],
    });
  }
}
