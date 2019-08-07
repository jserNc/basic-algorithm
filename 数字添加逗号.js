/*
完成函数 commafy，它接受一个数字作为参数，返回一个字符串，可以把整数部分从右到左每三位数添加一个逗号，如：12000000.11 转化为 12,000,000.11。
*/

function commafy (num) {
  const numStr = (num).toString();
  let integer = numStr;
  let decimal = '';

  const indexOfPoint = numStr.lastIndexOf('.');

  if (indexOfPoint !== -1) {
    integer = numStr.substring(0, indexOfPoint)
    decimal = numStr.substring(indexOfPoint)
  }

  const len = integer.length;
  let newInteger = [];

  integer.split('').forEach((s, index)=>{
    if ((len - index) % 3 === 0) {
      newInteger.push(',');
    }
    newInteger.push(s);
  })

  return newInteger.join('').replace(/^,/, '').replace(/^-,/, '-') + decimal
}
