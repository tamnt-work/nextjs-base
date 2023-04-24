import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';

/**
 * Convert object keys to camelCase
 * @param obj
 * @returns
 */
export const toCamelCase: any = (obj: any) => {
  if (!obj || typeof obj !== 'object') return obj;

  if (!Array.isArray(obj)) {
    return Object.fromEntries(Object.entries(obj).map(([key, val]) => [camelCase(key), toCamelCase(val)]));
  } else {
    return obj.map((el) => toCamelCase(el));
  }
};

/**
 * Convert object keys to snake_case
 * @param obj
 * @returns
 */
export const toSnakeCase: any = (obj: any) => {
  if (!obj || typeof obj !== 'object') return obj;

  if (!Array.isArray(obj)) {
    return Object.fromEntries(Object.entries(obj).map(([key, val]) => [snakeCase(key), toSnakeCase(val)]));
  } else {
    return obj.map((el) => toSnakeCase(el));
  }
};
