import { Injectable } from '@angular/core';
import { CrudService } from '@/shared/services';
import { GroupUserModel, UserModel } from '@/shared/models';
import { environment } from '@/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupUserApiService extends CrudService<GroupUserModel> {
  protected createUrl(): string {
    return environment.admin.groupUser;
  }


  createMany(data: Partial<GroupUserModel>[]) {
    return this.http.post<GroupUserModel[]>(this.baseUrl, data);
  }

  removeByGroupIdAndUserId(groupId: string, userId: string) {
    return this.http.delete(`${this.baseUrl}/${groupId}/${userId}`);
  }

}
