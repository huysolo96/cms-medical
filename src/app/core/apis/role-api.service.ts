import { Injectable } from '@angular/core';
import { CrudService } from '@/shared/services';
import { RoleModel } from '@/shared/models';
import { environment } from '@/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleApiService extends CrudService<RoleModel> {
  protected createUrl(): string {
    return environment.admin.role;
  }

}
