import { AnyObject } from '../types/public';

/**
 * @category url参数相关
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