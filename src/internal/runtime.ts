import { Func } from '../types/public';

/**
 * @ignore
 * @category 内部方法
 * @version v0.1.0
 * @since v0.1.0
 * @remarks
 * 该方法用于测试函数在指定时间内执行的次数，用于测试函数性能
 * @author 林文书
 * @param fn 需要测试的函数
 * @param time 指定时间
 * @returns 指定时间内执行的次数
 */
function runTime(fn: Func, time: number): number {
  const start = Date.now();
  let count = 0;

  while (Date.now() - start < time) {
    fn();
    count++;
  }
  return count;
}

export default runTime;
