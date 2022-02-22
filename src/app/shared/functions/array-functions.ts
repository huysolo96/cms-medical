export function isNotEmptyArray(list: any[]) {
    try {
        return Array.isArray(list) && list.length > 0;
    } catch (error) {
        return false;
    }
}
