import whatsType from './whatsType';

/**
 * ```
 * isFunction(()=>{}) => true
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category 内部方法
 * @author 林文书
 * @remarks
 * 判断对象是否是函数
 * @param obj 
 */
function isFunction(obj: any): boolean {
  return whatsType(obj, 'Function');
}

export default isFunction;
