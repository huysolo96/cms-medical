import { BaseCategoryService } from '@/shared/store';
import { DiseaseCategoryModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { DiseaseCategoryApiService } from '@/core/apis';
import { DiseaseCategoryStore, DiseaseCategoryState } from '../stores';
import { PagingService } from '@/core/services';
import { MatDialog } from '@angular/material/dialog';
@Injectable()
export class DiseaseCategoryService extends BaseCategoryService<DiseaseCategoryModel, DiseaseCategoryState> {

  constructor(
    protected categoryStore: DiseaseCategoryStore,
    protected apiService: DiseaseCategoryApiService,
    protected pagingService: PagingService,
  ) {
    super(categoryStore, apiService, pagingService);
  }

}
