import { StoreConfig } from '@datorama/akita';
import { RoleModel } from '@/shared/models';
import { BaseEntityStore, BaseModelState } from '@/shared/store';

export interface RoleState extends BaseModelState<RoleModel> {}

@StoreConfig({ name: 'role' })
export class RoleStore extends BaseEntityStore<RoleModel, RoleState> {

  constructor() {
    super();
  }

}
