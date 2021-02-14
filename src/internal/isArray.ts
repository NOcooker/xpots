import whatsType from './whatsType';

/**
 * ```
 * isArray([]) => true
 * isArray({}) => false
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category 内部方法
 * @author 林文书
 * @remarks
 * 判断数据是否是数组
 * @param data 
 */
function isArray(data: any): boolean {
  return whatsType(data, 'Array');
}

export default isArray;