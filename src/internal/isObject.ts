import whatsType from './whatsType';

/**
 * @category 内部方法
 * @param obj 
 */
function isObject(obj: any): boolean {
  return whatsType(obj, 'Object');
}

export default isObject;
