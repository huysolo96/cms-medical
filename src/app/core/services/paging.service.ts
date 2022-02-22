import { Injectable } from '@angular/core';
import { Paging, Pagination } from '@/shared/models';
import { PageEvent, MatPaginator } from '@angular/material';
import { PageParams } from '@/shared/models/params';
@Injectable()
export class PagingService {

  changePage(pageable: PageEvent): PageParams {
    return {
      page: pageable.pageIndex,
      size: pageable.pageSize,
      sort: 'createdAt,desc',
    };
  }

  createDefaultPagination(): Pagination {
    return {
      pageIndex: 0,
      pageSize: 20,
      length: 20,
      sort: 'createdAt,desc'
    };
  }

  getPagination(paging: Paging, sort = 'createdAt,desc'): Pagination {
    return {
      pageIndex: paging.number,
      pageSize: paging.size,
      length: paging.totalElements,
      sort
    };
  }
  setPaginatorValue(paginator: MatPaginator, paginationValue: Pagination) {
    paginator.pageIndex = paginationValue.pageIndex;
    paginator.length = paginationValue.length;
    paginator.pageSize = paginationValue.pageSize;
  }

}
