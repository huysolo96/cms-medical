import { Injectable } from '@angular/core';
import { BaseCategoryCrudService } from '@/shared/services';
import { ArticleCategoryModel } from '@/shared/models';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleCategoryApiService extends BaseCategoryCrudService<ArticleCategoryModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  protected createUrl(): string {
    return environment.admin.category.article;
  }
}
