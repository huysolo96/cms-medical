import { BaseModelState, BaseEntityStore } from '../base/base-entity.store';
import { BaseModel, Pagination } from '@/shared/models';
import { PagingService } from '@/core/services';
import { AddEntitiesOptions, ID, IDS, OrArray, coerceArray } from '@datorama/akita';

export interface BasePagingState<T extends BaseModel> extends BaseModelState<T> {
  paging: Pagination;
}

export class BasePagingStore<
  M extends BaseModel,
  EntityType extends BasePagingState<M>
> extends BaseEntityStore<M, EntityType > {
  constructor(pagingService: PagingService) {
    super();
    this.setPagination(pagingService.createDefaultPagination());
  }

  initDefaultPaging(): Pagination {
    return {
      pageIndex: 0,
      pageSize: 20,
      length: 0,
      sort: 'createdAt,desc'
    };
  }

  add(entities: OrArray<M>, options: AddEntitiesOptions = { loading: false }) {
    super.add(entities, options);
    // this.addTotalItem(coerceArray(entities).length);
  }

  removeSimple(id?: IDS) {
    super.removeSimple(id);
    this.addTotalItem(-coerceArray(id).length);
  }

  setPageNumber(page: number) {
    this._setState((state) => ({
      ...state,
      paging: {
        ...state.paging,
        number: page,
      }
    }));
  }

  setPagination(pagination: Pagination) {
    this._setState((state) => ({
      ...state,
      paging: pagination
    }));
  }

  addTotalItem(itemCount: number) {
    this._setState((state) => ({
      ...state,
      paging: {
        ...state.paging,
        length: state.paging.length + itemCount
      }
    }));
  }

  nextPage(slide = 1) {
    this.setPageNumber(this._value().paging.pageIndex + slide);
  }

  prevPage(slide = 1) {
    this.setPageNumber(this._value().paging.pageIndex - slide);
  }

}
