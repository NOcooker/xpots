import whatsType from './whatsType';

/**
 * ```
 * isRegExp(new RegExp(/1/g)) => true
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category 内部方法
 * @author 林文书
 * @remarks
 * 判断数据是否是正则表达式
 * @param data 
 */
function isRegExp(obj: any): boolean {
  return whatsType(obj, 'RegExp');
}

export default isRegExp;