import { PermissionStore, PermissionState } from '../stores';
import { BaseEntityService } from '@/shared/store';
import { PermissionModel } from '@/shared/models';
import { PermissionApiService } from '@/core/apis';

export class PermissionService extends BaseEntityService<PermissionModel, PermissionState> {

  constructor(protected permissionStore: PermissionStore, protected apiService: PermissionApiService) {
    super(permissionStore, apiService);
  }

}
