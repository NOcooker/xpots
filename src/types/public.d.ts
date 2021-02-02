/**
 * 对象类型
 */
export type AnyObject = Record<string, any>

/**
 * 定义传参为函数的类型
 */
export type Func = (...arg: unknown) => unknown
