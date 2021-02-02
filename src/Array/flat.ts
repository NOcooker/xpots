/**
 * @category 数组操作相关
 * @remarks
 * 这个方法返回一个一级数组
 * @param name 姓名
 * @returns 返回 一级数组
 * @author 李博
 * @see 这个方法用于扁平化多维数组
 * @param arr 目标数组
 * @param deep 扁平的层级
 */
function flatArray(arr: any[], deep = Infinity): any[] {
  const result = arr.reduce((initial, item) => {
    if (Array.isArray(item) && deep > 1) return [...initial, ...flatArray(item, deep - 1)]
    return [...initial, item]
  }, [])
  return result
}

export default flatArray;