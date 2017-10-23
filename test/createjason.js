'use strict';
/**
  Nodes: A,B,C,D,E,F,Z,Y
  Edges: AZ=1 AB=3 AC=1 AD=1 AE=5, CY=0.5 CF=1
*/

const UG = require('../module.js');
let graph = new UG.Graph();

graph.nodes('node').createIndex('name');

graph.createNode('node', {name: 'A'});
graph.createNode('node', {name: 'B'});
graph.createNode('node', {name: 'C'});
graph.createNode('node', {name: 'D'});
graph.createNode('node', {name: 'E'});
graph.createNode('node', {name: 'F'});

graph.createNode('node', {name: 'Z'});
graph.createNode('node', {name: 'Y'});

graph.createEdge('edge').link(
  graph.nodes('node').find('A'),
  graph.nodes('node').find('Z')
).setDistance(1);

graph.createEdge('edge').link(
  graph.nodes('node').find('C'),
  graph.nodes('node').find('Y')
).setDistance(0.5);

graph.createEdge('edge').link(
  graph.nodes('node').find('A'),
  graph.nodes('node').find('B')
).setDistance(3);

graph.createEdge('edge').link(
  graph.nodes('node').find('A'),
  graph.nodes('node').find('C')
).setDistance(1);

graph.createEdge('edge').link(
  graph.nodes('node').find('A'),
  graph.nodes('node').find('D')
).setDistance(1);

graph.createEdge('edge').link(
  graph.nodes('node').find('A'),
  graph.nodes('node').find('E')
).setDistance(5);

graph.createEdge('edge').link(
  graph.nodes('node').find('C'),
  graph.nodes('node').find('F')
).setDistance(1);

console.log(graph);


/// print put jason file
var jstr= graph.toJSON();
var jstr1=JSON.stringify(jstr,null,'\t');
console.log('graph: '+jstr1);

//write graph infos to a json file
const fs = require('fs');
fs.writeFile("graphinfo2.json", jstr1, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});





/*
console.log(
  graph.trace(
    graph.nodes('node').find('A'),
    graph.nodes('node').find('E')
  ).prettify()
)

console.log('Closest:');

graph.closest(graph.nodes('node').find('A')).map(function(v) {
  console.log(v.distance(), v.end().toString());
});

// Can load from serialized ?

console.log('Serialize and re-run query');

graph.fromJSON(graph.toJSON());

graph.closest(graph.nodes('node').find('A')).map(function(v) {
  console.log(v.distance(), v.end().toString());
});

console.log('get');

console.log(graph.nodes('node').find('A').get('name'));
*/
