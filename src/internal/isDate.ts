import whatsType from './whatsType';


/**
 * ```
 * isDate(new Date()) => true
 * isDate({}) => false
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category 内部方法
 * @author 林文书
 * @remarks
 * 判断数据是否是Date对象
 * @param data 
 */
function isDate(data: any): boolean {
  return whatsType(data, 'Date');
}

export default isDate;
