// 判断字符串里的括号是否合法
function checkStr (str) {
  var strarr = new Strack()
  for(let i=0; i<str.length;i++) {
    var item = str[i]
    if (item === '(') {
      strarr.push(item)
    } else if (item === ')') {
      if (strarr.isEmpty()) {
        return false
      } else {
        strarr.pop()
      }
    }
  }
  return strarr.isEmpty()
}
var str = '()()'
console.log(checkStr(str));