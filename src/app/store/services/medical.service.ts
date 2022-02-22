import { BaseItemService } from '@/shared/store';
import { MedicalItemModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { PagingService } from '@/core/services';
import { MedicalApiService } from '@/core/apis';
import { MedicalItemStore, MedicalItemState } from '../stores';
@Injectable()
export class MedicalService extends BaseItemService<MedicalItemModel, MedicalItemState> {

  constructor(
    protected itemStore: MedicalItemStore,
    protected apiService: MedicalApiService,
    protected pagingService: PagingService,
  ) {
    super(itemStore, apiService, pagingService);
  }


}
