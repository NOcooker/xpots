import isNull from './internal/isNull';
import isFunction from './internal/isFunction';
import isDate from './internal/isDate';
import isRegExp from './internal/isRegExp';
import isArray from './internal/isArray';

/**
 * ```
 * deepClone({a: 1, b: 2}) => {a: 1, b: 2}
 * ```
 * 
 * @version v0.1.0
 * @since v0.1.0
 * @remarks
 * 该方法用于深拷贝 
 * @param date 
 * @param format 
 */
function deepClone(obj: any): any {
  if (isNull(obj)) return null
  if (typeof obj !== 'object') return obj
  if (isFunction(obj)) return obj
  if (isDate(obj)) return new Date(obj.getTime())
  if (isRegExp(obj)) return obj

  let target: any
  if (isArray(obj)) {
    target = []
  } else {
    // 拿到原型对象
    const proto = Object.getPrototypeOf(obj)
    target = Object.create(proto)
  }

  for (const i in obj) {
    target[i] = deepClone(obj[i])
  }
  return target
}

export default deepClone;
