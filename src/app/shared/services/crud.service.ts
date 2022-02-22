import { HttpClient } from '@angular/common/http';
import { PagingWithContent, BaseModel } from '../models';
import { PageParams } from '../models/params';

export abstract class CrudService<Req extends BaseModel, Res = Req> {
    protected baseUrl = '';
    constructor(protected http: HttpClient) {
        this.setUrl();
    }

    protected abstract createUrl(): string;

    private setUrl() {
        this.baseUrl = this.createUrl();
    }

    update(data: Partial<Req>) {
        return this.http.put<Res>(`${this.baseUrl}/${data.id}`, data);
    }

    create(data: Partial<Req>) {
        return this.http.post<Res>(this.baseUrl, data);
    }

    delete(id: string) {
        return this.http.delete<Res>(`${this.baseUrl}/${id}`);
    }

    getAll() {
        return this.http.get<Res[]>(`${this.baseUrl}/all`);
    }
}

export abstract class PagingCrudService<T extends BaseModel, Params extends PageParams = PageParams> extends CrudService<T > {
    getWithParam(params: Partial<Params>) {
        return this.http.get<PagingWithContent<T>>(this.baseUrl, {
            params: params as any
        });
    }

}
