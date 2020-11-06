import Graph from "./Graph.js";
import Vertice from "./Vertice.js";
import Edge from "./Edge.js";
let A = new Vertice("A");
let B = new Vertice("B");
let C = new Vertice("C");
let D = new Vertice("D");
let E = new Vertice("E");

let AB = new Edge(A,B);
let AC = new Edge(A,C);
let AE = new Edge(A,E);
let BD = new Edge(B,D);

let g = new Graph();
g.addVertice(A);
g.addVertice(B);
g.addVertice(C);
g.addVertice(D);
g.addVertice(E);
g.addEdge(AB);
g.addEdge(AC);
g.addEdge(AE);
g.addEdge(BD);
g.info();
console.log(g.findNearestVertices("A"));