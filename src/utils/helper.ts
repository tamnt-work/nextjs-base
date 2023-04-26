import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';

/**
 * Convert object keys to camelCase
 * @param obj
 * @returns
 */
export const toCamelCase = <T = any>(obj: any): T => {
  if (!obj || typeof obj !== 'object') return obj;

  if (!Array.isArray(obj)) {
    return Object.fromEntries(Object.entries(obj).map(([key, val]) => [camelCase(key), toCamelCase(val)])) as T;
  } else {
    return obj.map((el) => toCamelCase(el)) as T;
  }
};

/**
 * Convert object keys to snake_case
 * @param obj
 * @returns
 */
export const toSnakeCase = <T = any>(obj: any): T => {
  if (!obj || typeof obj !== 'object') return obj;

  if (!Array.isArray(obj)) {
    return Object.fromEntries(Object.entries(obj).map(([key, val]) => [snakeCase(key), toSnakeCase(val)])) as T;
  } else {
    return obj.map((el) => toSnakeCase(el)) as T;
  }
};

/**
 * Convert plain object to instance
 * @param ctor
 * @param plain
 * @returns
 */
export const plainToInstance = <T>(ctor: new () => T, plain: any): T => {
  const instance = new ctor() as any;
  const keys = Object.keys(instance as Record<string, unknown>);

  for (const key of keys) {
    if (plain.hasOwnProperty(key)) {
      instance[key] = plain[key];
    }
  }

  return instance;
};
