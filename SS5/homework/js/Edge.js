import Vertice from "./js/Vertice.js";
export default class Edge{
    vertice1;
    vertice2;
    constructor(vertice1,vertice2){
        if(vertice1 instanceof Vertice && vertice2 instanceof Vertice){
            this.vertice1 = vertice1;
            this.vertice2 = vertice2;
        }
    }
}