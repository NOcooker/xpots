import isEmpty from './internal/isEmpty';
import { AnyObject } from './types/public';

/**
 * ```
 * // 如在请求传参之前，去除空的值,不包含0
 * const params = {
 *   a: 0,
 *   b: null,
 *   c: 1,
 *   d: ""
 * }
 * noFakeParams(params) => { a: 0, c: 1 }
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category url参数相关
 * @author 林文书
 * @remarks
 * 该方法可用于去除值为空的传参
 * @param params 
 */
function noFakeParams(params: AnyObject): AnyObject {
  const exportParams: AnyObject = {}
  Object.keys(params).forEach(key => { // 去除对象的假值
    const value = params[key]
    if (!isEmpty(value)) exportParams[key] = value
  })
  return exportParams
}

export default noFakeParams;