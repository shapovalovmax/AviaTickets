import { format } from 'date-fns';

/**
 *
 * @param str
 * @param type - 'yyyy.mm.dd'
 * @returns {string}
 */

export function formatDate(str, type) {
    const date = new Date(str);
    return format(date, type);
}