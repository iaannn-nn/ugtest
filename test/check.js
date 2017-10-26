'use strict';
/**
  Nodes: A,B,C,D,E,F,Z,Y
  Edges: AZ=1 AB=3 AC=1 AD=1 AE=5, CY=0.5 CF=1
*/

const UG = require('../module.js');

let graph = new UG.Graph();

graph.nodes('node').createIndex('name');
graph.nodes('person').createIndex('name');

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

graph.save("a.ugd",function(err){});// save files

graph.createNode('person',{name: 'yen' });
graph.createNode('person',{name: 'Nan'});
graph.createNode('person',{name:'Sam'});
graph.createNode('person', {name:'Nguyen'});

graph.createEdge('roomate').link(
  graph.nodes('person').find('yen'),
  graph.nodes('person').find('Nan')
).setDistance(2);

graph.createEdge('mom').link(
  graph.nodes('person').find('yen'),
  graph.nodes('person').find('Sam')
).setDistance(1);

graph.createEdge('dad').link(
  graph.nodes('person').find('yen'),
  graph.nodes('person').find('Nguyen')
).setDistance(1);

graph.createEdge('friends through yen').link(
  graph.nodes('person').find('Nan'),
  graph.nodes('person').find('Sam')
).setDistance(3);

graph.createEdge('friends through yen').link(
  graph.nodes('person').find('Nan'),
  graph.nodes('person').find('Nguyen')
).setDistance(3);

graph.createEdge('likes').link(
  graph.nodes('person').find('yen'),
  graph.nodes('node').find('A')
).setDistance(2);

graph.createEdge('likes').link(
  graph.nodes('person').find('yen'),
  graph.nodes('node').find('B')
).setDistance(1);

graph.createEdge('likes').link(
  graph.nodes('person').find('yen'),
  graph.nodes('node').find('C')
).setDistance(0.5);

//console.log(graph);

console.log("trace the node inward.....................................................");
console.log(
  graph.trace(
    graph.nodes('person').find('Sam'),
    graph.nodes('node').find('E'), 1
  ).prettify()
) /// can't trace like this ????

console.log("trace the node with no direction........................................");
console.log(
  graph.trace(
    graph.nodes('person').find('Sam'),
    graph.nodes('node').find('E'),
  ).prettify()
)

console.log("...........................................................................");
console.log('Closest:');

graph.closest(graph.nodes('person').find('Sam')).map(function(v) {
  console.log(v.distance(), v.end().toString());
});

// Can load from serialized ?

console.log('Serialize and re-run query');

graph.fromJSON(graph.toJSON());

graph.closest(graph.nodes('node').find('A')).map(function(v) {
  console.log(v.distance(), v.end().toString());
});
console.log("1 try options.............................................................................");
let options = {                     //test using options for closest
  compare: function(node) {
    return node.entity === 'person';
  }
}
graph.closest(graph.nodes('node').find('A'), options).map(function(v) {
  console.log(v.distance(), v.end().toString());
});

console.log("2.............................................................................");
console.log('get');

console.log(graph.nodes('node').find('A').get('name'));
