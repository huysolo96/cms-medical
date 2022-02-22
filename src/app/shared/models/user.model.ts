import { BaseModel } from './base.model';

export type UserRoleType = 'USER' | 'SPECIALIST';

export interface UserModel extends BaseModel {
    diseaseCategories: string[];
    createdByUserId: string;
    updatedByUserId: string;
    username: string;
    password: string;
    typeLogin: string;
    name: string;
    avatar: string;
    phonenumber: string;
    email: string;
    firebaseId: string;
    type: UserRoleType;
}
