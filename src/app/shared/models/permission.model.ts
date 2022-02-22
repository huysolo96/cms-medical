import { BaseModel } from './base.model';

export interface PermissionModel extends BaseModel {
    name: string;
    description: string;
    restrictions: string[];
}


