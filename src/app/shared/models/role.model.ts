import { BaseModel } from './base.model';

export interface RoleModel extends BaseModel {
  createdByUserId: string;
  updatedByUserId: string;
  name: string;
  description: string;
  perms: string[];
}

export function createRole(params: Partial<RoleModel>) {
  return {

  } as RoleModel;
}
