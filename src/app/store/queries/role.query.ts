import { QueryEntity } from '@datorama/akita';
import { RoleModel } from '@/shared/models';
import { RoleState, RoleStore } from '../stores';
import { BaseEntityQuery } from '@/shared/store';


export class RoleQuery extends BaseEntityQuery<RoleModel, RoleState> {

  constructor(protected store: RoleStore) {
    super(store);
  }

}
