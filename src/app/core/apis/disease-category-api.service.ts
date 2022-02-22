import { Injectable } from '@angular/core';
import { BaseCategoryCrudService } from '@/shared/services';
import { DiseaseCategoryModel } from '@/shared/models';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DiseaseCategoryApiService extends BaseCategoryCrudService<DiseaseCategoryModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  protected createUrl(): string {
    return environment.admin.category.disease;
  }
}
