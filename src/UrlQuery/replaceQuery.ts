import { AnyObject } from '../types/public';

/**
 * 
 * ```
 * const params = {
 *   q1: "abc",
 *   q2: "hello",
 *   q4: "444"
 * }
 * replaceQuery("http://www.aaa.com/path?q1=11&q2=22&q3=33", params)
 * =>
 * "http://www.aaa.com/path?q1=abc&q2=hello&q3=33&q4=444"
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category url参数相关
 * @remarks
 * 替换url中传参的值，如果原url没有该值，自动填充
 * @author 林文书
 * @param url 
 * @param params 
 */
function replaceQuery(url: string, params: AnyObject): string {
  for (let key in params) {
    const reg = new RegExp('('+ key +'=)([^&]*)','gi')
    const hasKey = url.indexOf(key) > -1

    // 有值就替换，没值就补充
    if (hasKey) {
      url = url.replace(reg, `${key}=${params[key]}`)
    } else {
      url += `&${key}=${params[key]}`
    }
  }
  return url
}

export default replaceQuery;