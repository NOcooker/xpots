/**
 * ```
 * fixed(10000, 3, true) => "10,000.000"
 * fixed(233.68, 5) => "233.68000"
 * fixed(123.45, -2) => "123"
 * ```
 * @version v0.1.0
 * @since v0.1.0
 * @category Math方法
 * @remarks
 * 这个方法用于小数后位数补全, 也支持展示千分位符，最后返回一个字符串
 * @author 林文书
 * @param value 目标数
 * @param decimals 小数点后保留位数
 * @param thousandth 是否展示千分位符号 ,
 */
function fixed(value: number | string, decimals: number = 2, thousandth?: boolean) {
  if (decimals < 0) decimals = 0
  
  // 值不存在
  if (!value && value !== 0) {
    if (!decimals) return "0";
    let rslt = value || 0 + ".";
    for (let i = 0; i < decimals; i++) {
      rslt += "0";
    }
    return rslt;
  }

  let str = value + "";
  let len = str.length;
  const dot = str.indexOf('.')

  if (dot === -1 && decimals > 0) {//无小数点补0
    str = str + '.';
    for (let i = 0; i < decimals; i++) {
      str += '0';
    }
  }

  if (dot > -1 && decimals === 0 ) {
    str = str.substr(0, dot)
  }

  if (dot > -1 && decimals > 0) {
    while(len <= dot + decimals) {
      len++;
      str += "0";
    }
    str = str.substr(0, dot + decimals + 1);
  }
  
  // const dot = str.indexOf('.') < 0 ? len : str.indexOf(".");

  // if (len <= dot + decimals) {//位数不足补0
    
  // } else {
  //   str = str.substr(0, dot + decimals + 1);
  // }
  // 是否展示千分位
  return thousandth ? str.replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : str;
}

export default fixed;