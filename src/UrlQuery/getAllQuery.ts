import { AnyObject } from "../types/public";
import isNull from "../../lib/internal/isNull";
import isEmpty from "../internal/isEmpty";

/**
 * @category url参数相关
 * @param url 
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
