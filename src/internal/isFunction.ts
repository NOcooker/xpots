import whatsType from './whatsType';

/**
 * @category 内部方法
 * @param obj 
 */
function isFunction(obj: any): boolean {
  return whatsType(obj, 'Function');
}

export default isFunction;
