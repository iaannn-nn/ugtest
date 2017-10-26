// read u.user
//user id | age | gender | occupation | zip code

//init the graph
var ug= require('ug');
var graph= new ug.Graph();


//create node collection of user and index
graph.nodes('user').createIndex('u_id');


// create user node from data
const readline=require('readline');
const lineReader = readline.createInterface({
  input: require('fs').createReadStream('data/u.user')
});

lineReader.on('line', function (line) {
  var str= line.split("|");
  from_line_addnode(str);
});
function from_line_addnode(str){
  graph.createNode('user',{u_id:str})
}

console.log(graph.nodes('user'));



//for each line create edge from
