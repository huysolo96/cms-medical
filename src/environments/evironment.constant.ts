import { generateEnv } from './environment.model';

export const devEnvironment = generateEnv(
    {
        root: 'https://apihealcare.mideasvn.com/api/v1.0',
        upload: 'https://apihealcare.mideasvn.com/resources-api/v1.0/upload'
    }
);

export const prodEnvironment = generateEnv({
    root: 'https://apihealcare.mideasvn.com/api/v1.0',
    upload: 'https://resourceshealcare.mideasvn.com/resources-api/v1.0/upload'
}, {
        production: true
    }
);