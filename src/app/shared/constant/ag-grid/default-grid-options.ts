import { GridOptions } from 'ag-grid-community';
import { DateCellComponent } from '@/shared/components/cells';

export const defaultGridOptions = (gridOptions: GridOptions, actionCell: any): GridOptions => ({
    ...gridOptions,
    columnDefs: [
        ...gridOptions.columnDefs,
        {
            headerName: 'Ngày cập nhật',
            field: 'updatedAt',
            cellRenderer: 'dateCell',
        },
        {
            headerName: 'Ngày tạo',
            field: 'createdAt',
            cellRenderer: 'dateCell',
        },
        {
            headerName: 'Hành động',
            field: 'action',
            cellRenderer: 'actionCell',
            pinned: 'right',
        }
    ],
    frameworkComponents: {
        dateCell: DateCellComponent,
        actionCell,
        ...gridOptions.frameworkComponents
    },
    localeText: 'Không có dữ liệu để hiển thị'
});
