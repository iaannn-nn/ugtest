var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('data/u.data')
});
lineReader.on('line', function (line) {
  var data= [];
  var str= line.toString();
  data=str.split("\t");
  //var str1= data[0]+","+data[1]+","+data[2];
  var str1= data[0];
  console.log(data[0]);
});
