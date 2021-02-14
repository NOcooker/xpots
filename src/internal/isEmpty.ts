import trim from "./trim";

/**
 * ```
 * isEmpty({}) => true
 * isEmpty([]) => true
 * isEmpty("") => true
 * isEmpty(null) => true
 * isEmpty(undefined) => true
 * isEmpty(0) => false
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category 内部方法
 * @author 林文书
 * @remarks
 * 判断数据是否是空值
 * @param value 
 */
function isEmpty(value: any): boolean {
  return (
    (!value && value !== 0)
    || value === undefined
    || trim(value) === ''
    || trim(value) === 'null'
    || value === ''
    || value.length === 0
    || JSON.stringify(value) === "{}"
  );
}

export default isEmpty;