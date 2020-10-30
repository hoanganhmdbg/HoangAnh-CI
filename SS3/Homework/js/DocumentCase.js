
class DocumentCase{
    id;
    name;
    documents = [];
    owner;
    dateModified;
    constructor(id,name,documents,owner,dateModified){
        this.id = id;
        this.name = name;
        this.documents = documents;
        this.owner = owner;
        this.dateModified =dateModified;
    }
    addDocument(document){
            this.documents.push(document);     
    }
    deleteDocument(id){
        this.documents.forEach((el,index) => {
            if(el.id == id){
                this.documents.splice(index,1);
                return;
            }
        });
    }
    showDocument(){
        this.documents.forEach((el,i) => {
            console.log(` Document has id = ${el.id} name : ${el.name} `);
        });
    }

}
export default DocumentCase;
