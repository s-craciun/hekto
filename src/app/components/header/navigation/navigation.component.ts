import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterActions } from '../../../store/filter/filter.actions';
import { BehaviorSubject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit, OnDestroy {
  public searchTerm = new BehaviorSubject<string>('');
  private searchSubscription!: Subscription;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchTerm
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        if (!value) {
          return;
        }

        this.store.dispatch(
          FilterActions.setQueryParams({ queryParams: { searchTerm: value } })
        );
      });
  }

  public onChange(event: Event) {
    this.searchTerm.next((event.target as HTMLInputElement).value);
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
