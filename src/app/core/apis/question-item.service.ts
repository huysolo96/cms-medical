import { Injectable } from '@angular/core';
import { BaseItemCrudService } from '@/shared/services';
import { QuestionItemModel } from '@/shared/models';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionItemApiService extends BaseItemCrudService<QuestionItemModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  protected createUrl(): string {
    return environment.admin.item.question;
  }
}
