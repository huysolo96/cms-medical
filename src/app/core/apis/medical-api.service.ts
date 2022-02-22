import { Injectable } from '@angular/core';
import { PagingCrudService } from '@/shared/services';
import { MedicalItemModel } from '@/shared/models';
import { environment } from '@/environment';

@Injectable()
export class MedicalApiService extends PagingCrudService<MedicalItemModel> {

  protected createUrl(): string {
    return environment.admin.item.medicines;
  }


}
