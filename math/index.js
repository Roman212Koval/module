/*import'./abc';
import'./summ';
import'./min';*/

const min = require('./min');
const summ = require('./summ');
const abc = require('./abc');

module.exports.abc = abc;
module.exports.summ = summ;
module.exports.min = min;