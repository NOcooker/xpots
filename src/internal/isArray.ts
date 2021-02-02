import whatsType from './whatsType';

/**
 * @category 内部方法
 * @param obj 
 */
function isArray(obj: any): boolean {
  return whatsType(obj, 'Array');
}

export default isArray;