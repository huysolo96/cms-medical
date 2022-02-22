import { QuestionCategoryStore, QuestionCategoryState } from '../stores';
import { BaseCategoryService } from '@/shared/store';
import { QuestionCategoryModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { QuestionCategoryApiService } from '@/core/apis';
import { PagingService } from '@/core/services';
@Injectable()
export class QuestionCategoryService extends BaseCategoryService<QuestionCategoryModel, QuestionCategoryState> {

  constructor(
    protected categoryStore: QuestionCategoryStore,
    protected apiService: QuestionCategoryApiService,
    protected pagingService: PagingService,
  ) {
    super(categoryStore, apiService, pagingService);
  }
}
