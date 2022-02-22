import { UploadConfig } from '@/upload/upload-config';
import { environment } from '@/environment';

export const uploadConfig: UploadConfig = {
    api: environment.upload,
    // api: 'https://resourceshealcare.mideasvn.com/resources-api/v1.0/upload',
    multiple: false,
};
