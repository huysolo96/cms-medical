import { GroupUserApiService } from '@/core/apis';
import { UserStore } from '../stores';
import { GroupUserModel, UserModel } from '@/shared/models';
import { map } from 'rxjs/operators';

export class GroupUserService  {

  constructor(
    protected userStore: UserStore,
    protected apiService: GroupUserApiService,
  ) {
  }

  addMany(groupUsers: Partial<GroupUserModel>[], users: UserModel[]) {

    return this.apiService.createMany(groupUsers).pipe(
      map(_ => {
        this.userStore.add(users);
      })
    );
  }

  removeByGroupIdAndUserId(groupId: string, userId: string) {
    return this.apiService.removeByGroupIdAndUserId(groupId, userId).pipe(
      map(_ => {
        this.userStore.remove(userId);
      })
    );
  }
}
