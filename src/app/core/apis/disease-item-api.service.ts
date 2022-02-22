import { Injectable } from '@angular/core';
import { BaseItemCrudService } from '@/shared/services';
import { DiseaseItemModel} from '@/shared/models';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DiseaseItemApiService extends BaseItemCrudService< DiseaseItemModel> {
  protected createUrl(): string {
    return environment.admin.item.disease;
  }

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
