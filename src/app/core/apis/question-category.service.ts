import { Injectable } from '@angular/core';
import { BaseCategoryCrudService } from '@/shared/services';
import { QuestionCategoryModel } from '@/shared/models';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionCategoryApiService extends BaseCategoryCrudService<QuestionCategoryModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  protected createUrl(): string {
    return environment.admin.category.question;
  }
}
