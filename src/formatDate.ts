import isDate from './internal/isDate';
import { AnyObject } from './types/public';

/**
 * ```
 * formatDate(1613268688559, "yyyy/MM/dd") => "2021/02/14"
 * ```
 * 
 * @version v0.1.0
 * @since v0.1.0
 * @remarks
 * 该方法用于格式化时间
 * @author 林文书
 * @param date 
 * @param format 
 */
function formatDate(date: Date | string | number, format: string = "yyyy-MM-dd"): string {
  if (!date) {
    return "";
  }

  let newDate: any;

  if (isDate(date)) {
    newDate = date
  }

  if (typeof date === "string" || "number") {
    newDate = new Date(date as (string | number));
  }
  if (isNaN(newDate)) {
    return "";
  }

  const map: AnyObject = {
    M: newDate.getMonth() + 1, //月份
    d: newDate.getDate(), //日
    h: newDate.getHours(), //小时
    m: newDate.getMinutes(), //分
    s: newDate.getSeconds(), //秒
    q: Math.floor((newDate.getMonth() + 3) / 3), //季度
    S: newDate.getMilliseconds(), //毫秒
  };

  // 根据模板替换成时间并返回
  return format.replace(/([yMdhmsqS])+/g, function (item, t: string) {
    var v = map[t];
    // 有匹配项就替换
    if (v !== undefined) {
      if (item.length > 1) {
        // > 1位就补0，再从后往前截取两位
        v = "0" + v;
        v = v.substr(v.length - 2);
      }
      return v;
    }
    // 如果是年单独返回，因为有可能是4位
    if (t === "y") {
      return (newDate.getFullYear() + "").substr(4 - item.length);
    }
    // 默认返回
    return item;
  });
}

export default formatDate;
