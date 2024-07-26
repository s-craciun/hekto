import { createAction, createActionGroup, props } from '@ngrx/store';
import { IFilter } from '../../interfaces/filter.interface';
import { Params } from '@angular/router';

export enum NGRXFilterSource {
  FilterSource = 'FilterSource',
}

export enum NGRXFilterType {
  setQueryParams = 'Set Query Params',
}

export const FilterActions = createActionGroup({
  source: NGRXFilterSource.FilterSource,
  events: {
    [NGRXFilterType.setQueryParams]: props<{ queryParams: Params }>(),
  },
});
