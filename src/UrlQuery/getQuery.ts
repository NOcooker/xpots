import isNull from '../internal/isNull';

/**
 * ```
 * getQuery("q1", "http://www.aaa.com/path?q1=11&q2=22&q3=33") => "11"
 * getQuery("q4", "http://www.aaa.com/path") => null
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category url参数相关
 * @remarks
 * 获取url传参中指定的键值，如果没有对应传值，返回null
 * @author 林文书 
 * @param key 
 * @param url 
 */
function getQuery(key: string, url?: string) {
  const reg = new RegExp(`${key}=([^&]*)(&|$)`);

  let r = (url || window.location.search.substr(1)).match(reg);
  if (!isNull(r)) {
    return decodeURIComponent((r as RegExpMatchArray)[1]);
  }
  return null;
}

export default getQuery;