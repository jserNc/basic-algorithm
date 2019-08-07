/*
完成函数 hexToRGB，它的作用将 16 进制颜色值转换成 RGB 值：

hexToRGB('#F0F0F0') // => rgb(240, 240, 240)
hexToRGB('#9fc') // => rgb(153, 255, 204)
hexToRGB('无效颜色') // => null
*/

const hexToRGB = (hex) => {
  let regex = /^\#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  if(!regex.test(hex)) {
    return null;
  }

  let num = hex.split('#')[1];
  const result = [];
  const map = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  const hex2Dec = function(hex) {
    let dec = map[hex.toLowerCase()];
    return dec ? dec : Number(hex);
  };

  if (num.length === 3) {
    [0, 1, 2].forEach(i => {
      result[i] = hex2Dec(num[i]) * 17;
    });
  }

  if (num.length === 6) {
    [0, 2, 4].forEach((i, index) => {
      result[index] = hex2Dec(num[i]) * 16 + hex2Dec(num[i+1]);
    });
  }

  return `rgb(${result})`.replace(/,/g, ', ');
}
