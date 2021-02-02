import whatsType from './whatsType';

/**
 * @category 内部方法
 * @param obj 
 */
function isRegExp(obj: any): boolean {
  return whatsType(obj, 'RegExp');
}

export default isRegExp;