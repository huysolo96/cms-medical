import { FormGroup } from '@angular/forms';
import { Type } from '@angular/core';
import { FormValidator } from '@/core/services';
import { map, startWith } from 'rxjs/operators';

export interface EditDialogData<T> {
    label: string;
    content: T;
}

export interface EditDialogWithComponentData<T> extends EditDialogData<T> {
    componentType: Type<AEditComponent<any>>;
}

export abstract class AEditComponent<T> {
    formGroup: FormGroup;
    protected oldData: T;

    protected abstract createForm(data: T): FormGroup;

    public initForm(data: T) {
        this.oldData = data;
        this.formGroup = this.createForm(data);
    }

    protected get formValue(): Partial<T> {
        return this.formGroup.value;
    }

    get isInvalid$() {
        return this.formGroup.statusChanges.pipe(
            startWith('INVALID'),
            map(status => status === 'INVALID')
        );
    }

    get isInvalid() {
        return this.formGroup.invalid;
    }

    getValue(): T {
        return {
            ...this.oldData,
            ...this.formGroup.value
        };
    }
}
export abstract class AEditComponentWithValidate<T> extends AEditComponent<T> {
    constructor(protected formValidator: FormValidator) {
        super();
    }
}
