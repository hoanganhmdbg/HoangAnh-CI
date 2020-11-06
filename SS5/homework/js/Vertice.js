import Person from "./Person.js"
export default class Vertice{
    data;
    constructor(data){
        if(data instanceof Person){
            this.data = data;
        }       
    }
}