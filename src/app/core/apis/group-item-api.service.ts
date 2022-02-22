import { Injectable } from '@angular/core';
import { BaseItemCrudService } from '@/shared/services';
import { GroupItemModel} from '@/shared/models';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GroupItemApiService extends BaseItemCrudService< GroupItemModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  protected createUrl(): string {
    return environment.admin.item.group;
  }
}
