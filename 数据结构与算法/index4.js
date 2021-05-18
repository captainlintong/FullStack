// 实现一个有min方法的栈
const { Strack } = require('./index.js')
function minStrack () {
  var data_strack = new Strack() // 存储数据
  var min_strack = new Strack() // 存储最小值
  this.push = function (item) {
    if (min_strack.isEmpty() || item < min_strack.top()) {
      min_strack.push(item)
    } else {
      min_strack.push(min_strack.pop())
    }
  }
  this.pop = function () {
    data_strack.pop()
    min_strack.pop()
  }
  this.min = function () {
    return min_strack.pop()
  }
}
var minstrack = new minStrack()
minstrack.push(3)
minstrack.push(6)
console.log(minstrack.min());