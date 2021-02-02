import isNull from '../../lib/internal/isNull';

/**
 * @category url参数相关
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