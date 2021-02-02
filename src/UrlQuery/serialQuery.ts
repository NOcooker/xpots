import { AnyObject } from '../types/public';

/**
 * @category url参数相关
 * @param params 
 */
function serialQuery(params: AnyObject): string {
  let str = "";
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      str += `&${key}=${params[key]}`;
    }
  });
  str = str.slice(1, str.length);
  return str;
}

export default serialQuery;