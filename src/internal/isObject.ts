import whatsType from './whatsType';

/**
 * ```
 * isObject({}) => true
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category 内部方法
 * @author 林文书
 * @remarks
 * 判断数据是否是对象
 * @param data 
 */
function isObject(data: any): boolean {
  return whatsType(data, 'Object');
}

export default isObject;
