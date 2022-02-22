import { RoleStore, RoleState } from '../stores';
import { BaseEntityService } from '@/shared/store';
import { RoleModel } from '@/shared/models';
import { RoleApiService } from '@/core/apis';

export class RoleService extends BaseEntityService<RoleModel, RoleState> {

  constructor(protected roleStore: RoleStore, protected apiService: RoleApiService) {
    super(roleStore, apiService);
  }

}
