import { BasePagingStore, BasePagingState } from './base-paging.store';
import { BaseModel } from '@/shared/models';
import { BaseEntityQuery } from '../base/base-entity.query';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

export class BasePagingQuery <M extends BaseModel, S extends BasePagingState<M>> extends BaseEntityQuery<M, S> {

  constructor(protected store: BasePagingStore<M, S>) {
    super(store);
  }

  selectPagination() {
    return this.select().pipe(map(st => st.paging));
  }

  selectPageSize() {
    try {
      return this.selectPagination().pipe(map(p => p.pageSize));
    } catch (error) {
      return of(0);
    }
  }

  selectIndex() {
    try {
      return this.selectPagination().pipe(map(p => p.pageIndex));
    } catch (error) {
      return of(0);
    }
  }


  selectPageLength() {
    try {
      return this.selectPagination().pipe(map(p => p.length));
    } catch (error) {
      return of(0);
    }
  }


}

