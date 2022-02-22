import { Injectable } from '@angular/core';
import { BaseItemCrudService } from '@/shared/services';
import { ArticleItemModel} from '@/shared/models';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleItemApiService extends BaseItemCrudService< ArticleItemModel> {
  protected createUrl(): string {
    return environment.admin.item.article;
  }
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
