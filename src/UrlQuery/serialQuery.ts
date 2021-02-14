import { AnyObject } from '../types/public';

/**
 * ```
 * const params = {
 *   a: 0,
 *   b: null,
 *   c: 1,
 *   d: ""
 * }
 * serialQuery(params) => "a=0&c=1"
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category url参数相关
 * @remarks
 * 序列化传参
 * @author 林文书
 * @param params 
 */
function serialQuery(params: AnyObject): string {
  let str = "";
  Object.keys(params).forEach((key) => {
    if (params[key] || params[key] === 0) {
      str += `&${key}=${params[key]}`;
    }
  });
  str = str.slice(1, str.length);
  return str;
}

export default serialQuery;