import { ColDef } from 'ag-grid-community';

export interface ColDefMap {
  [field: string]: ColDef ;
}

export const colDefMap: ColDefMap = {
  name: {
    headerName: 'Tên',
    pinned: true
  },
  description: {
    headerName: 'Mô tả',
  },
  createdAt: {
    headerName: 'Ngày cập nhật',
    cellRenderer: 'dateCell'
  },

  updatedAt: {
    headerName: 'Ngày cập nhật',
    cellRenderer: 'dateCell'
  },
};