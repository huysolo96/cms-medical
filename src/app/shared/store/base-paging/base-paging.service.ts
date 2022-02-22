import { BasePagingStore, BasePagingState } from './base-paging.store';
import { BaseModel, Pagination } from '@/shared/models';
import { BaseEntityService } from '../base/base-entity.service';
import { PagingCrudService } from '@/shared/services';
import { PagingService } from '@/core/services';
import { MatDialog } from '@angular/material/dialog';
import { Type, Provider } from '@angular/core';
import { PageParams } from '@/shared/models/params';
import { throwError } from 'rxjs';

export class BasePagingService<M extends BaseModel, S extends BasePagingState<M>,
  Params extends PageParams = PageParams> extends BaseEntityService<M, S> {

  constructor(
    protected store: BasePagingStore<M, S>,
    protected crudService: PagingCrudService<M>,
    protected pagingService: PagingService,
  ) {
    super(store, crudService);
  }

  getWithParam(pageParams: Partial<Params>) {
    this.store.setLoading(true);
    this.crudService.getWithParam(pageParams).subscribe(res => {
      if (res) {
        this.store.set(res.content);
        this.store.setPagination(this.pagingService.getPagination(res));
      } else {
        return throwError('');
      }
    }, (err) => {
      this.store.set([]);
    }, () => {
      this.store.setLoading(false);
    });
  }

  setDefaultPage() {
    this.setPage({
      pageIndex: 0,
      pageSize: 20,
      length: 0,
      sort: 'createdAt,desc'
    });
  }

  setPage(paging: Pagination) {
    this.store._setState((state) => ({
      ...state,
      paging
    }));
  }

  nextPage() {
    this.store._setState((state) => ({
      ...state,
      paging: {
        ...state.paging,
        pageIndex: state.paging.pageIndex + 1
      }
    }));
  }

}

export function basePagingServiceInjector(
  storeType: Type<BasePagingStore<BaseModel, BasePagingState<BaseModel>>>,
  crudType: Type<PagingCrudService<BaseModel>>,
  serviceType: Type<BasePagingService<BaseModel, BasePagingState<BaseModel>>>
): Provider {
  return {
    provide: serviceType,
    useFactory: (
      store: BasePagingStore<BaseModel, BasePagingState<BaseModel>>,
      crud: PagingCrudService<BaseModel>,
      paging: PagingService,
      dialog: MatDialog
    ) => new serviceType(store, crud, paging, dialog),
    deps: [
      storeType,
      crudType,
      PagingService,
      MatDialog
    ]
  };
}

