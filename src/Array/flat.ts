/**
 * ```
 * flatArray([[1], [2]]) => [1, 2]
 * flatArray([[1], [2, 3, [4, 5]]], 2) => [1, 2, 3, [4, 5]]
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category 数组操作相关
 * @remarks
 * 扁平化多维数组，可设置扁平维度，最后返回一个数组
 * @author 李博
 * @param name 姓名
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