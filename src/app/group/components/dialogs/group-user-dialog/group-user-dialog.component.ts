import { Component, Inject } from '@angular/core';
import { UserModel } from '@/shared/models';
import { FormValidator, PagingService } from '@/core/services';
import { FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { distinctUntilChanged } from 'rxjs/operators';
import { TypeUserDialogComponent } from '../type-user-dialog/type-user-dialog.component';
import { UserParamsBody } from '@/shared/models/params';
import { UserByGroupService, UserByGroupQuery, UserByGroupToken } from '@/group/state';
import { GroupUserService } from '@/store/services/group-user.service';

@Component({
  selector: 'app-group-user-dialog',
  templateUrl: './group-user-dialog.component.html',
  styleUrls: ['./group-user-dialog.component.scss']
})
export class GroupUserDialogComponent {
  users$: Observable<UserModel[]>;

  constructor(
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<GroupUserDialogComponent>,
    protected userByGroupService: UserByGroupService,
    protected userByGroupQuery: UserByGroupQuery,
    protected formValidator: FormValidator,
    protected pagingService: PagingService,
    @Inject(UserByGroupToken) protected groupUserService: GroupUserService,
    @Inject(MAT_DIALOG_DATA) public data: UserParamsBody) {
    this.users$ = userByGroupQuery.selectAll();
    userByGroupService.setDefaultPage();

    userByGroupQuery.selectPagination().pipe(distinctUntilChanged()).subscribe((pagination) => {
      userByGroupService.loadMoreFilterUserParam({
        page: pagination.pageIndex,
        size: pagination.pageSize
      }, data).subscribe(() => { });
    });
  }

  addUser() {
    const dialofRef = this.matDialog.open(TypeUserDialogComponent, {
      data: {
        type: 'SPECIALIST'
      } as  Partial<UserParamsBody>,
      width: '700px'
    });

    dialofRef.afterClosed().subscribe((users: UserModel[]) => {
      if (users) {
        this.groupUserService.addMany(users.map(user => ({
          userId: user.id,
          groupId: this.data.groupId,
          roles: [
            'SPECIALIST'
          ]
        })), users).subscribe(() => {});
      }
    });
  }

  removeById(userId: string) {
    this.groupUserService.removeByGroupIdAndUserId(this.data.groupId, userId).subscribe(() => {});
  }

  nextPage() {
    this.userByGroupService.nextPage();
  }


}
