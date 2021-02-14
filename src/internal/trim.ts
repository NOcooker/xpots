/**
 * ```
 * trim(" abc ") => "abc"
 * trim(" a b c ") => "a b c"
 * trim("") => ""
 * ```
 * 
 * @version v0.1.0
 * @since v0.1.0
 * @remarks
 * 该方法用于清除字符串头尾的空格
 * @author 林文书
 * @param str 
 */

function trim(str: string): string {
  return str
    ? String(str).replace(/(^\s+)|(\s+$)/g, '')
    : str;
}

export default trim;