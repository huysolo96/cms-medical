import { BaseModel } from './base.model';
import { UserRoleType } from './user.model';

export interface GroupUserModel extends BaseModel {
    groupId: string;
    userId: string;
    roles: UserRoleType[];
}
