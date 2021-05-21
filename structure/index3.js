/**
 *中缀表达式 4+13/5 = 6
  后缀表达式 ['4','13', '5', '/', '+']
 */
Strack = require('./index.js')
function changeBDS (str) {
  var myStrsck = new Strack.Strack()
  str.forEach(item => {
    if ('+-*/'.indexOf(item) < 0) {
      myStrsck.push(item)
    } else {
      var value1 = myStrsck.pop()
      var value2 = myStrsck.pop()
      var value3 = value2 + item + value1
      var res = parseInt(eval(value3))
      myStrsck.push(res.toString())
    }
  })
  return myStrsck.pop()
}
var str = ['4','13', '5', '/', '+']
console.log(changeBDS(str));
