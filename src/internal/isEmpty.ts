import trim from "./trim";

/**
 * @category 内部方法
 * @param value 
 */
function isEmpty(value: any): boolean {
  return (
    !value
    || value === undefined
    || trim(value) === ''
    || trim(value) === 'null'
    || value === ''
    || value.length === 0
  );
}

export default isEmpty;