import * as Types from "../types/internal";

/**
 * 该方法用于测试函数在指定时间内执行的次数，用于测试函数性能
 * @param fn 需要测试的函数
 * @param time 指定时间
 */
function runTime(fn: Types.Func, time: number): number {
  const start = Date.now();
  let count = 0;

  while (Date.now() - start < time) {
    fn();
    count++;
  }
  return count;
}

export default runTime;
