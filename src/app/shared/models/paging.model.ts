import { SortDirection } from '@angular/material/sort';
import { PageParams } from './params';

export const isSorted = (value: string, sortValue: string): SortDirection => {
    if (sortValue.search(value)) {
        if (sortValue.search('desc')) {
            return 'desc';
        } else if (sortValue.search('asc')) {
            return 'asc';
        }
    }
    return '';
};

export interface Pagination {
    pageIndex: number;
    pageSize: number;
    length: number;
    sort: string;
}

/**
 * Các model khác có thể extends model này nếu dùng paging
 */
export interface Paging {
    pageable: Pageable;
    totalElements: number;
    number: number;
    size: number;
}

export interface PagingWithContent<T> extends Paging {
    content: T[];
}



export interface Pageable {
    sort: SortModel;
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface SortModel {
    sorted: boolean;
    unsorted: boolean;
}

export function changePage(pageable: Pageable): PageParams {
    return {
        page: pageable.pageNumber,
        size: pageable.pageSize,
        sort: 'createdAt,desc',
    };
}

export function getPagingOnly(paging: Paging) {
    return {
        pageable: paging.pageable,
        totalElements: paging.totalElements,
        number: paging.number,
        size: paging.size,
    };
}
