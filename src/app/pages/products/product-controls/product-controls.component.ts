import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FilterActions } from '../../../store/filter/filter.actions';

@Component({
  selector: 'app-product-controls',
  templateUrl: './product-controls.component.html',
  styleUrl: './product-controls.component.scss',
})
export class ProductControlsComponent implements OnInit {
  @Output() changeView = new EventEmitter<string>();
  public controlsForm: FormGroup = this.formBuilder.group({
    // perPage: [10],
    sortBy: ['desc'],
  });
  public activeView = 'list';

  constructor(
    private formBuilder: FormBuilder,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.controlsForm.valueChanges.subscribe((value) => {
      this.store.dispatch(FilterActions.setQueryParams({ queryParams: value }));
    });
  }

  public setActiveView(view: string) {
    return this.activeView === view ? 'active' : undefined;
  }

  public onChangeView(view: string) {
    this.changeView.emit(view);
    this.activeView = view;
  }
}
