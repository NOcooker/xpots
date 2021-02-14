/**
 * 
 * ```
 * hello("xpots") => "Hello xpots"
 * ```
 * @category 编写demo
 * @version 当前版本, 如v0.2.0
 * @since 首次发布时的版本, 如v0.1.0
 * @remarks
 * 注释参考文档 {@link https://typedoc.org/guides/doccomments/#supported-tags | typedoc}
 * @param name 姓名
 * @returns 返回 "hello ${name}"
 * @author 作者
 */
function hello(name: string): string {
  return `Hello ${name}`;
}
export default hello;
