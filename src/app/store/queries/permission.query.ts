import { PermissionModel } from '@/shared/models';
import { PermissionState, PermissionStore } from '../stores';
import { BaseEntityQuery } from '@/shared/store';
import { filter, map } from 'rxjs/operators';


export class PermissionQuery extends BaseEntityQuery<PermissionModel, PermissionState> {

  constructor(protected store: PermissionStore) {
    super(store);
  }


  selectRestrictions() {
    return this.select().pipe(
      filter(st => st != null),
      map(st => st.restrictions)
    );
  }
}
