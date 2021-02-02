/**
 * @category Math方法
 * @remarks
 * 这个方法返回一个字符串
 * @author 林文书
 * @see 这个方法用于小数后位数补全
 * @param value 目标数
 * @param decimals 小数点后保留位数
 * @param thousandth 是否展示千分位符号 ,
 */
function fixed(value: number | string, decimals: number = 2, thousandth?: boolean) {
  // 值不存在
  if (!value && value !== 0) {
    const rslt = value + ".";
    for (var i = 0; i < decimals; i++) {
      value += "0";
    }
    return rslt;
  }
  let str = value ? value + "" : "0";
  let len = str.length;
  const dot = str.indexOf('.');

  if (dot < 0) {//无小数点补0
    str = str + '.';
    for (var i = 0; i < decimals; i++) {
      str += '0';
    }
  }

  if (len <= dot + decimals) {//位数不足补0
    while(len <= dot + decimals) {
      len++;
      str += "0";
    }
  } else {
    str = str.substr(0, dot + decimals + 1);
  }
  // 是否展示千分位
  return thousandth ? str.replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : str;
}

export default fixed;