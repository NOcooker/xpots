import { AnyObject } from "../types/public";
import isNull from "../../lib/internal/isNull";
import isEmpty from "../internal/isEmpty";

/**
 * ```
 * getAllQueries("http://www.aaa.com/path?q1=11&q2=22&q3=33")
 * =>
 * {
 *   q1: "11",
 *   q2: "22",
 *   q3: "33"
 * }
 * ```
 * 
 * @version v0.1.0
 * @since v0.1.0
 * @category url参数相关
 * @author 林文书
 * @remarks
 * 获取url中的全部传参
 * @param params 
 * @returns 返回 url传参组成的对象
 */
function getAllQueries(url?: string): AnyObject {
  const rslt: AnyObject = {};
  const reg = new RegExp(/\?.*$/);
  const str = (url || window.location.search).match(reg);
  // 没匹配? 就返回空对象
  if (isNull(str)) return {};
  // 根据&拆分出 [k=v, k=v, ...]
  const k2v = (str as RegExpMatchArray)[0].substr(1).split("&");

  k2v.forEach((el) => {
    const [k, v] = el.split("=");
    if (!isEmpty(v)) { // 过滤空值
      rslt[k] = v;
    }
  });

  return rslt;
}

export default getAllQueries;
