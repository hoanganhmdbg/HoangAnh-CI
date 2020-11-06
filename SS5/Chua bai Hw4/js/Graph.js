import Vertice from "./Vertice.js";
import Edge from "./Edge.js";
export default class Graph{
    vertices;
    edges;
    constructor(){
        this.vertices = [];
        this.edges = [];
    }
    addVertice(vertice){
        if(vertice instanceof Vertice){
            this.vertices.push(vertice);
        }
    }
    addEdge(edge){
        if(edge instanceof Edge){
            this.edges.push(edge);
        }
    }
    info(){
        console.log("Vertice : ", this.vertices);
        console.log("Edge : ", this.edges);
    }
    findNearestVertices(vertice){
       let foundEdges =   this.edges.filter((edge) => edge.a.data == vertice || edge.b.data == vertice);
       let foundVertices = [];
       foundEdges.forEach((edge) => {
           if(edge.a.data == vertice){
            foundVertices.push(edge.b);
           }else{
            foundVertices.push(edge.a);
           }
           
       })
       return foundVertices;
    }
}