import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileResponse } from './file-response';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) { }

  upload(file: File, url: string) {
    const date = new Date().getTime();
    const formData: FormData = new FormData();
    formData.append('file', file, date + '_' + file.name);
    formData.append('path', '/thumb');
    return this.http.post<FileResponse>(url, formData);
  }
}
