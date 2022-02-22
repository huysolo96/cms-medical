export interface EnvironmentConfig {
    production: boolean;
}

export interface DynamicAPI {
    admin: {
        category: EnvironmentCategory;
        item: EnvironmentItem;
        account: string;
        groupUser: string;
        role: string;
        user: string;
    };
    permission: string;
}

export interface StaticAPI {
    root: string;
    upload: string;

}

export interface EnvironmentAPI extends DynamicAPI, StaticAPI {
}


export interface EnvironmentModel extends EnvironmentConfig, EnvironmentAPI {
}

export interface EnvironmentBase {
    group: string;
    question: string;
    disease: string;
    article: string;
}

export interface EnvironmentCategory extends EnvironmentBase {

}


export interface EnvironmentItem extends EnvironmentBase {
    medicines: string;
}

export const defaultConfig: EnvironmentConfig = {
    production: false
};



export function generateEnv(
    envAPI: StaticAPI,
    config: EnvironmentConfig = defaultConfig,
): EnvironmentModel {
    const baseUrl = (groupName: string) => `${envAPI.root}/${groupName}`;
    const adminUrl = (groupName: string) => baseUrl(`admin/${groupName}`);
    const adminPostUrl = (groupName: string) => baseUrl(`admin/posts/${groupName}`);
    const categoryUrl = (categoryName: string) => adminPostUrl(`${categoryName}Category`);
    const itemUrl = (itemName: string) => adminPostUrl(`${itemName}`);
    return {
        root: envAPI.root,
        permission: adminUrl('staffPermission'),
        admin: {
            category: {
                group: categoryUrl('group'),
                question: categoryUrl('quiz'),
                disease: categoryUrl('disease'),
                article: categoryUrl('article'),
            },

            item: {
                group: itemUrl('group'),
                question: itemUrl('quiz'),
                disease: itemUrl('diseases'),
                article: itemUrl('articles'),
                medicines: itemUrl('medicines'),
            },
            account: adminUrl('account'),
            groupUser: adminPostUrl('groupUser'),
            role: adminUrl('role'),
            user: adminUrl('user'),
        },
        ...envAPI,
        ...config
    };
}
