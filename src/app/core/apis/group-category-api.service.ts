import { Injectable } from '@angular/core';
import { BaseCategoryCrudService } from '@/shared/services';
import { GroupCategoryModel } from '@/shared/models';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GroupCategoryApiService extends BaseCategoryCrudService<GroupCategoryModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  protected createUrl(): string {
    return environment.admin.category.group;
  }
}
