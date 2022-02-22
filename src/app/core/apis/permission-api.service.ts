import { Injectable } from '@angular/core';
import { PermissionModel } from '@/shared/models';
import { PagingCrudService } from '@/shared/services';
import { environment } from '@/environment';

@Injectable()
export class PermissionApiService extends PagingCrudService<PermissionModel> {
  protected createUrl(): string {
    return environment.permission;
  }

}
