import isEmpty from './internal/isEmpty';
import { AnyObject } from './types/public';

/**
 * @category url参数相关
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