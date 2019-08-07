/*
完成 is 函数，它接受两个参数，你返回 true 和 false 来表示这两个参数是否有 相同的值。例如：

is('foo', 'foo');     // true
is(window, window);   // true

is('foo', 'bar');     // false
is([], []);           // false

var test = { a: 1 };
is(test, test);       // true

is(null, null);       // true

is(0, -0);            // false
is(-0, -0);           // true
is(NaN, 0/0);         // true
*/

const is = (x, y) => {
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y;
  } else if (x === y || (x !== x && y !== y)) {
    return true;
  } else {
    return false;
  }
}
