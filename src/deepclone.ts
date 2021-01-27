import isNull from '../lib/internal/isNull';
import isFunction from '../lib/internal/isFunction';
import isDate from '../lib/internal/isDate';
import isRegExp from '../lib/internal/isRegExp';
import isArray from '../lib/internal/isArray';

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
