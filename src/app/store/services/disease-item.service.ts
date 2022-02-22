import { BaseItemService } from '@/shared/store';
import { DiseaseItemModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { PagingService } from '@/core/services';
import { DiseaseItemApiService } from '@/core/apis';
import { DiseaseItemState, DiseaseItemStore } from '../stores';
@Injectable()
export class DiseaseItemService extends BaseItemService<DiseaseItemModel, DiseaseItemState> {

  constructor(
    protected itemStore: DiseaseItemStore,
    protected apiService: DiseaseItemApiService,
    protected pagingService: PagingService,
  ) {
    super(itemStore, apiService, pagingService);
  }


}
