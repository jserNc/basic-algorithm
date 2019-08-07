/*
完成将 toChineseNum， 可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回 一万二千三百四十五。
*/

// 45188070 => 四千五百一十八万八千零七十

const toChineseNum = (num) => {
  let numStr = Number(num).toString();
  // 最后四位
  let numLowStr = numStr.slice(-4);
  // 高位
  let numHighStr = numStr.slice(0, -4);

  // 五位以下的数字转换
  const LittleNumbertoChineseNum = (num) => {
    let nums = num.split('');
    let len = nums.length;

    if (len < 1) {
      return ''
    }

    const map = {
      '1': '一',
      '2': '二',
      '3': '三',
      '4': '四',
      '5': '五',
      '6': '六',
      '7': '七',
      '8': '八',
      '9': '九',
      '0': '零'
    };

    let result = '';

    nums.forEach((num, index) => {
      switch (len - index) {
        case 5:
          result += map[num] + '万'
          break;
        case 4:
          result += map[num] + '千'
          break;
        case 3:
          result += map[num] + '百'
          break;
        case 2:
          result += map[num] + '十'
          break;
        case 1:
          result += (map[num] === '零' ? '零个' : map[num])
          break;
        default:
      }
    })

    // 末尾的0不读，比如12000读作一万二千
    while (result[result.length - 2] === '零') {
      result = result.slice(0, result.length - 2)
    }

    // 零后面的单位不读，一千零百二十 -> 一千零二十
    result = result.replace(/零.{1}/g, '零');
    // 多个连续的零合并，一万零零二十 -> 一万零二十
    result = result.replace(/零+/g, '零');

    return result
  }


  const highNum = LittleNumbertoChineseNum(numHighStr);
  // 高位和最后四位数之间用'万'连接，当然也存在没有高位的情况
  return (highNum ? highNum + '万' : '') + LittleNumbertoChineseNum(numLowStr)
}
