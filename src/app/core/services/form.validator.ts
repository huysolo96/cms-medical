import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors} from '@angular/forms';

interface RegMap {
  [key: string]: RegExp;
}
const VALIDATE_REGS: RegMap = {
  noSpace: /\S/,
// tslint:disable-next-line: max-line-length
  isUrl: /((https|http)?:\/\/)?(((www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,6})|\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
};

@Injectable()
export class FormValidator {

    constructor() { }


    validArray(fc: FormControl) {
      return !Array.isArray(fc.value) || fc.value.length === 0 ? {
        required: `Danh sách không được rỗng`
      } : null;
    }
    validNoEmpty(fc: FormControl) {
      return fc.value == null || !VALIDATE_REGS.noSpace.test(fc.value) ? {
        required: `Dữ liệu nhập không được rỗng`
      } : null;
    }

    validUrl(fc: FormControl) {
      return !VALIDATE_REGS.isUrl.test(fc.value) ? {
        required: `Đường dẫn không hợp lệ`
      } : null;
    }

    getErr(errs: ValidationErrors, exceptions?: string[]) {
      for (const err in errs) {
        if (errs.hasOwnProperty(err) && (exceptions == null || !exceptions.includes(err))) {
          return errs[err];
        }
      }
      return '';
    }
}
