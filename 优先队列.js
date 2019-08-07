/*
优先队列是一种元素带权重的队列，你可以往队列中添加和删除元素，但是删除元素的时候会把优先级最高的元素删除。例如：

const pq = new PriorityQueue()
pq.add(1)
pq.add(2)
pq.add(3)

pq.remove() // => 3
pq.remove() // => 2
pq.remove() // => 1
remove 方法每次删除的时候都会把最大的元素删除掉，并且返回被删除元素。请你完成 PriorityQueue 的实现。
*/

class PriorityQueue {
  add (e) {
    if (!this.elems) {
      this.elems = [];
    }

    for (let i = 0; i < this.elems.length; i++) {
      if (e < this.elems[i] ) {
        this.elems.splice(i, 0, e);
        return;
      }
    }

    this.elems.push(e);
  }

  remove () {
    return this.elems.pop()
  }
}


const where = () => {
  console.log('arguments.caller:',arguments.caller);
}

var f = function() {
  console.log('(new Error).stack:',(new Error).stack);
}
