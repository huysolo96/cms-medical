import { EntityState, EntityStore, IDS } from '@datorama/akita';
import { BaseModel } from '@/shared/models';
export type BaseEntityStoreType = BaseEntityStore<BaseModel, BaseModelState<BaseModel>>;

export interface BaseModelState <T extends BaseModel> extends EntityState<T> {
}



export class BaseEntityStore<M extends BaseModel, S extends BaseModelState<M>> extends EntityStore<S, M> {
    removeSimple(id?: IDS) {
        this.remove(id);
    }
}
