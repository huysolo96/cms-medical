import { QueryEntity, ID } from '@datorama/akita';
import { BaseEntityStore, BaseModelState, BaseEntityStoreType } from './base-entity.store';
import { BaseModel } from '@/shared/models';
import { Provider, Type } from '@angular/core';
import { map } from 'rxjs/operators';
export type BaseEntityQueryType = BaseEntityQuery<BaseModel, BaseModelState<BaseModel>>;
export class BaseEntityQuery<M extends BaseModel, S extends BaseModelState<M>> extends QueryEntity<S, M> {

  constructor(protected store: BaseEntityStore<M, S>) {
    super(store);
  }

  selectStatus(id: ID) {
    return this.selectEntity(id).pipe(map(obj => obj.status));
  }

}

export function entityQueryGenrator(storeType: Type<BaseEntityStoreType>, token: string): Provider {
  return {
    provide: token,
    useFactory: (store: BaseEntityStoreType) => new BaseEntityQuery(store),
    deps: [storeType]
  };
}
