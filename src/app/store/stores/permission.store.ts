import { StoreConfig } from '@datorama/akita';
import { PermissionModel, RestrictionModel } from '@/shared/models';
import { BaseEntityStore, BaseModelState } from '@/shared/store';

export interface PermissionState extends BaseModelState<PermissionModel> {
  restrictions: RestrictionModel[];
}

const initialState = {
  restrictions: [
    {
      path: 'account',
      name: 'Quản lý tài khoản',
    },
    {
      name: 'Phân quyền',
      path: 'role/role',
    },
    {
      name: 'Cấu hình phân quyền',
      path: 'role/permission',
    },
    {
      name: 'Quản lý người dùng',
      path: 'user'
    },
    {
      name: 'Danh mục nhóm',
      path: 'group/categories'
    },
    {
      name: 'Danh sách nhóm',
      path: 'group/item'
    },
    {
      name: 'Danh mục bệnh',
      path: 'disease/categories'
    },
    {
      name: 'Danh sách bệnh',
      path: 'disease/item'
    },
    {
      name: 'Danh mục câu hỏi',
      path: 'question/categories'
    },
    {
      name: 'Danh sách câu hỏi',
      path: 'question/item'
    },
    {
      name: 'Danh mục bài viết',
      path: 'article/categories'
    },
    {
      name: 'Danh sách bài viết',
      path: 'article/item'
    }
  ] as RestrictionModel[]
};
@StoreConfig({ name: 'permission' })
export class PermissionStore extends BaseEntityStore<PermissionModel, PermissionState> {

  constructor() {
    super(initialState);
  }

}
