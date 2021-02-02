import whatsType from './whatsType';

/**
 * @category 内部方法
 * @param obj 
 */
function isNull(obj: any): boolean {
  return whatsType(obj, 'Null');
}

export default isNull;