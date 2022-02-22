import { ArticleItemStore } from './article-item.store';

import { GroupItemStore } from './group-item.store';

import { QuestionItemStore } from './question-item.store';

import { DiseaseItemStore } from './disease-item.store';

import { ArticleCategoryStore } from './article-category.store';

import { GroupCategoryStore } from './group-category.store';

import { QuestionCategoryStore } from './question-category.store';

import { DiseaseCategoryStore } from './disease-category.store';

import { RoleStore } from './role.store';

import { AccountStore } from './account.store';

import { UserStore } from './user.store';

import { PermissionStore } from './permission.store';

import { MedicalItemStore } from './medical-item.store';

export * from './article-item.store';
export * from './group-item.store';
export * from './question-item.store';
export * from './disease-item.store';
export * from './article-category.store';
export * from './group-category.store';
export * from './question-category.store';
export * from './disease-category.store';
export * from './role.store';
export * from './account.store';
export * from './user.store';
export * from './permission.store';
export * from './medical-item.store';

export const stores = [
    ArticleItemStore,
    GroupItemStore,
    QuestionItemStore,
    DiseaseItemStore,
    ArticleCategoryStore,
    GroupCategoryStore,
    QuestionCategoryStore,
    DiseaseCategoryStore,
    RoleStore,
    AccountStore,
    UserStore,
    PermissionStore,
    MedicalItemStore
];
