import Vertice from "./Vertice.js";
import Edge from "./Edge.js";
export default class Graph{
    listVertice;
    listEdge;
    constructor(){
        this.listVertice = [];
        this.Edge = [];
    }
    addVertice(vertice){
        if(vertice instanceof Vertice){
            this.listVertice.push(vertice);
        }
    }
    addEdge(edge){
        if(edge instanceof Edge){
            this.listEdge.push(edge);
        }
    }
    findFriendsByVertice(vertice){
        if(!vertice instanceof Vertice){
            throw new Error("loi");
        }
        let listFoundEdge = this.listEdge.filter((edge) => edge.vertice1 == vertice || edge.vertice2 == vertice);
        let listFriend = [];
        listFoundEdge.array.forEach(el => {
            if(el.vertice1 == vertice){
                listFriend.push(el.vertice2.data);
            }else{
                listFriend.push(el.vertice1.data);
            }
        });
    }
    findFriendsByPhoneNumber(phoneNumber){
        let findVerticeByPhone;
        for (let i = 0; i < this.listVertice.length; i++) {
            if(this.listVertice.data.phoneNumber == phoneNumber){
                findVerticeByPhone = this.listVertice[i];
            }
        }
        let list = this.findFriendsByVertice(this.findFriendsByPhoneNumber);
        return list;
    }

}