// 943 users
// 1682 items
// 100000 ratings


// init the graph
let ug = require('ug');
let graph = new ug.Graph();

//create node collection of user and index
graph.nodes('user').createIndex('u_id');
// create user node from data
for( var i=1; i<944; i++){
  graph.createNode('user',{u_id:i.toString()});
}

//create node collection of movie
graph.nodes('movie').createIndex('m_id');
// create movie node from data
for( var j=1; j<1683;j++){
  graph.createNode('movie',{m_id: j.toString()})
}

//create Edge from user to movie
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('data/u.data')
});
const data= [];
lineReader.on('line', function (line) {
  data.push(line);
});

lineReader.on('close', function() {
        console.log(data)
});

console.log(data);
