/*
有时候我们需要访问一个对象较深的层次，但是如果这个对象某个属性不存在的话就会报错，例如：

var data = { a: { b: { c: 'ScriptOJ' } } }
data.a.b.c // => scriptoj
data.a.b.c.d // => 报错，代码停止执行
console.log('ScriptOJ') // => 不会被执行
请你完成一个 safeGet 函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined，例如：

var data = { a: { b: { c: 'ScriptOJ' } } }
safeGet(data, 'a.b.c') // => scriptoj
safeGet(data, 'a.b.c.d') // => 返回 undefined
safeGet(data, 'a.b.c.d.e.f.g') // => 返回 undefined
console.log('ScriptOJ') // => 打印 ScriptOJ
*/

const safeGet = (data, path) => {
  if (typeof data !== "object") {
    return undefined
  }

  const pathArr = path.split('.');

  for (let i = 0, len = pathArr.length; i < len; i++) {
    if (typeof data[pathArr[i]] !== "object") {
      if (i === len - 1) {
        return data[pathArr[i]]
      } else {
        return undefined
      }
    } else {
      if (i === len - 1) {
        return data[pathArr[i]]
      } else {
        data = data[pathArr[i]]
      }
    }
  }
}
