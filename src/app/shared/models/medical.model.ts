import { BaseItemModel } from './base-item.model';


export interface MedicalItemModel extends BaseItemModel {
    sku: string;
    name: string;
    price: number;
    ingredient: string;
    symptom: string;
}
