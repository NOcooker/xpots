import { AnyObject } from './types/public';

function noFakeParams(params: AnyObject): AnyObject {
  const exportParams: AnyObject = {}
  Object.keys(params).forEach(key => { // 去除对象的假值
    const value = params[key]
    if (value !== '' && value !== null && value !== undefined && value.toString() !== '') exportParams[key] = value
  })
  return exportParams
}

export default noFakeParams;