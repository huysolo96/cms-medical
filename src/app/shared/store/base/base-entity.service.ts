import { BaseEntityStore, BaseModelState } from './base-entity.store';
import { BaseModel } from '@/shared/models';
import { CrudService } from '@/shared/services';
import { MatDialog } from '@angular/material/dialog';
import { Type, Provider } from '@angular/core';

export class BaseEntityService<M extends BaseModel, S extends BaseModelState<M>> {

  constructor(
    protected baseEntityStore: BaseEntityStore<M, S>,
    protected apiService: CrudService<M>,
  ) {
  }

  update(data: Partial<M>) {
    this.baseEntityStore.setLoading(true);
    this.apiService.update(data).subscribe(res => {
      this.baseEntityStore.update(res.id, res);
    }, (err) => {}, () => this.baseEntityStore.setLoading(false));
  }

  create(data: Partial<M>) {
    this.baseEntityStore.setLoading(true);
    this.apiService.create(data).subscribe(res => {
      this.baseEntityStore.add(res);
    }, (err) => {}, () => this.baseEntityStore.setLoading(false));
  }

  delete(id: string) {
    this.baseEntityStore.setLoading(true);
    this.apiService.delete(id).subscribe(res => {
      this.baseEntityStore.removeSimple(res.id);
    }, (err) => {}, () => this.baseEntityStore.setLoading(false));
  }

  getAll() {
    this.baseEntityStore.setLoading(true);
    this.apiService.getAll().subscribe(res => {
      this.baseEntityStore.set(res);
    }, (err) => {}, () => this.baseEntityStore.setLoading(false));
  }

}


export function baseEntityServiceInjector(
  storeType: Type<BaseEntityService<BaseModel, BaseModelState<BaseModel>>>,
  crudType: Type<CrudService<BaseModel>>,
  serviceType: Type<BaseEntityService<BaseModel, BaseModelState<BaseModel>>>
): Provider {
  return {
    provide: serviceType,
    useFactory: (
      store: BaseEntityService<BaseModel, BaseModelState<BaseModel>>,
      crud: CrudService<BaseModel>,
      dialog: MatDialog
    ) => new serviceType(store, crud, dialog),
    deps: [
      storeType,
      crudType,
      MatDialog
    ]
  };
}
