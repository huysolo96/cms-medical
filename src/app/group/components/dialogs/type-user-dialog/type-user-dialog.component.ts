import { Component, Inject } from '@angular/core';
import { UserByTypeService, UserByTypeQuery } from '@/group/state';
import { UserModel } from '@/shared/models';
import { FormValidator, PagingService } from '@/core/services';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { distinctUntilChanged } from 'rxjs/operators';
import { UserParamsBody } from '@/shared/models/params';

@Component({
  selector: 'app-type-user-dialog',
  templateUrl: './type-user-dialog.component.html',
  styleUrls: ['./type-user-dialog.component.scss']
})
export class TypeUserDialogComponent {
  users$: Observable<UserModel[]>;
  typeUserCtrl = new FormControl([], this.formValidator.validArray);
  constructor(
    private dialogRef: MatDialogRef<TypeUserDialogComponent>,
    protected typeUserService: UserByTypeService,
    protected typeUserQuery: UserByTypeQuery,
    protected formValidator: FormValidator,
    protected pagingService: PagingService,
    @Inject(MAT_DIALOG_DATA) public data: UserParamsBody) {
    this.users$ = typeUserQuery.selectAll();
    typeUserService.setDefaultPage();
    typeUserQuery.selectPagination().pipe(distinctUntilChanged()).subscribe((pagination) => {
      typeUserService.loadMoreFilterUserParam({
        page: pagination.pageIndex,
        size: pagination.pageSize
      }, data).subscribe(() => { });
    });
  }

  addGroup() {
    if (this.typeUserCtrl.valid) {
      let filterdUsers = [];
      this.users$.subscribe(users => {
        filterdUsers = (this.typeUserCtrl.value as string[]).map(id => users.find(user => user.id === id));
      });
      this.dialogRef.close(filterdUsers);
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  nextPage() {
    this.typeUserService.nextPage();
  }
}
