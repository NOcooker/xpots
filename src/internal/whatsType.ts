
/**
 * ```
 * whatsType({}, "Object") => true
 * whatsType([], "Array") => true
 * whatsType(new Date(), "Date") => true
 * whatsType(() => {}, "Function")) => true
 * whatsType(null, "Null") => true
 * whatsType(new RegExp(/1/g), "RegExp")) => true
 * ```
 * @category 内部方法
 * @version v0.1.0
 * @since v0.1.0
 * @remarks
 * 判断数据类型
 * @author 林文书
 * @param obj 
 * @param type 
 * @returns 返回布尔值
 */
function whatsType(obj: any, type: string): boolean {
  return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

export default whatsType;
