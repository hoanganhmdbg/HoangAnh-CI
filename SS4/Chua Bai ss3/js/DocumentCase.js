import Document from "./Document.js";
export default class DocumentCase{
    id;
    name;
    documents;
    owner;
    dateModified;
    constructor(name,owner){
        this.id = uuid.v4();
        this.name = name;
        this.owner = owner;
        this.documents = [];
        this.dateModified = new Date().toISOString();
    }
    addDocument(document){
        if(document instanceof Document){
            this.documents.push(document);
        }else{
            console.log("truyen linh tinh");
        }      
    }
    findDocuments(name){
        // let result = [];
        // for(let document of this.documents){
        //     if(document.name == name){
        //         result.push(document);
        //     }
        // }
        // return result;
        let result = this.documents.filter(x => x == name);
        return result;
    }
    showDocument(){
        this.documents.forEach((item) => {
            console.log(item.info);
        })
    }
    deleteDocument(id){
        // let foundIndex = -1;
        // for (let i = 0; i < this.documents.length; i++) {
        //     if(this.documents[i].id == id){
        //         foundIndex = i;
        //     }
        // }
        let foundIndex = this.documents.findIndex(x => x.id == id);
        if(foundIndex >= 0){
            this.documents.splice(foundIndex,1);
        }
    }
    updateDocument(id,data){
        let found = this.documents.find(x => x.id == id);
        if(found != null){
            found.info = data;
        }
    }
}