import whatsType from './whatsType';

/**
 * @category 内部方法
 * @param obj 
 */
function isDate(obj: any): boolean {
  return whatsType(obj, 'Date');
}

export default isDate;
