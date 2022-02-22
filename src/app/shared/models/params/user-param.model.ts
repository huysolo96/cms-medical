import { PageParams } from './page-params.model';
import { UserRoleType } from '../user.model';

export interface UserParams extends PageParams {
    keyword: string;
}

export interface UserParamsBody {
    keyword: string;
    groupId: string;
    type: UserRoleType;
}

