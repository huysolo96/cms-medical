/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PermissionApiService } from './permission-api.service';

describe('Service: PermissionApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionApiService]
    });
  });

  it('should ...', inject([PermissionApiService], (service: PermissionApiService) => {
    expect(service).toBeTruthy();
  }));
});
