'use strict';
/**
  Nodes: A,B,C,D,E,F,Z,Y
  Edges: AZ=1 AB=3 AC=1 AD=1 AE=5, CY=0.5 CF=1
*/

const UG = require('../module.js');
let graph = new UG.Graph();

//load graph from a JSon graphinfos,  print graph info just console.log(graph)
var config=require('../graphinfo2.json');
console.log(config);
console.log("1............................................................................");
graph.fromJSON(config);
console.log(graph);
console.log("2............................................................................");

console.log(graph.nodes('node')); // shows all node of the graph with entity type node
console.log("3.............................................................................");
console.log(graph.edges('edge'));
console.log("4.............................................................................");
console.log(graph.nodes('node').inputNodes);
console.log("5.............................................................................");
console.log(graph.unit('1ffffffffffff2'));

console.log("6..............................................................................");
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
