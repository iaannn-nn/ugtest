// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//
//   rl.close();
// });

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('data/u.data')
});
lineReader.on('line', function (line) {
  var data= [];
  var str= line.toString();
  data=str.split("\t");
  console.log(" user "+data[0]+" rated movie "+data[1]+" "+data[2]);
});

// var fs = require('fs');
// fs.readFile('file.txt', function(err, data) {
//     if(err) throw err;
//     var array = data.toString().split("\n");
//     for(i in array) {
//         console.log(array[i]);
//     }
//     done();
// });

// var str="111  2222  3333  4444";
// var data= [];
// data=str.split("  ");
// console.log(data[0]);
// console.log(data[1]);
// console.log(data[2]);
