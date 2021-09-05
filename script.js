let mat = require('date-format');

let time = mat('hh:mm:ss');
let dd = mat('dd/mm/yyyy', new Date());
console.log(dd)

