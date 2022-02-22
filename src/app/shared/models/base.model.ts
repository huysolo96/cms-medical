export interface BaseModel {
    id: string;
    status: BaseModelStatus;
    updatedAt: string;
    createdAt: string;
}

export type BaseModelStatus = 'actived' | 'delete' | 'hidden';
