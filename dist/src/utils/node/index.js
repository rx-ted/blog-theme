import path from 'node:path';
import { joinPath } from '../../shared/index';
export function aliasObjectToArray(obj) {
    return Object.entries(obj).map(([find, replacement]) => ({
        find,
        replacement
    }));
}
function isBase64ImageURL(url) {
    // Base64 图片链接的格式为 data:image/[image format];base64,[Base64 编码的数据]
    const regex = /^data:image\/[a-z]+;base64,/;
    return regex.test(url);
}
const imageRegex = /!\[.*?\]\((.*?)\s*(".*?")?\)/;
/**
 * 从文档内容中提取封面
 * @param content 文档内容
 */
export function getFirstImagURLFromMD(content, route) {
    const url = content.match(imageRegex)?.[1];
    const isHTTPSource = url && url.startsWith('http');
    if (!url) {
        return '';
    }
    if (isHTTPSource || isBase64ImageURL(url)) {
        return url;
    }
    // TODO: 其它协议，待补充
    const paths = joinPath('/', route).split('/');
    paths.splice(paths.length - 1, 1);
    const relativePath = url.startsWith('/') ? url : path.join(paths.join('/') || '', url);
    return joinPath('/', relativePath);
}
export function debounce(func, delay = 1000) {
    let timeoutId;
    return (...rest) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...rest);
        }, delay);
    };
}
export function isEqual(obj1, obj2, excludeKeys = []) {
    const keys1 = Object.keys(obj1).filter(key => !excludeKeys.includes(key));
    const keys2 = Object.keys(obj2).filter(key => !excludeKeys.includes(key));
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }
        const val1 = obj1[key];
        const val2 = obj2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if ((areObjects && !isEqual(val1, val2, excludeKeys))
            || (!areObjects && val1 !== val2)) {
            return false;
        }
    }
    return true;
}
export function isObject(obj) {
    return obj != null && typeof obj === 'object';
}
