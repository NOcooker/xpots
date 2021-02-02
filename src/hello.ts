/**
 * @category 编写demo
 * @remarks
 * 这个方法返回一个字符串 {@link http://www.baidu.com | 百度}
 * @param name 姓名
 * @returns 返回 hello ${name}
 * @author 林文书
 * @see 这个方法是用来打招呼的
 * 
 * ```
 * <my-custom-element>Highlight JS will auto detect the language</my-custom-element>
 * ```
 */
function hello(name: string): string {
  return `Hello ${name}`;
}
export default hello;
