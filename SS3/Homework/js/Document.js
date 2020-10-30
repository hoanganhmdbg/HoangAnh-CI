 class Document{
    id;
    name;
    author;
    price;
    publishDate;
    constructor(id,name,author,price,publishDate){
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate;
    }
    get info(){
        return `
                Document have id = ${this.id}, name : ${this.name}, author : ${this.author}
                , price : ${this.price}, publishDate : ${this.publishDate}
                `
    }
    set info(data){
        if(data instanceof Document){
            this.id = data.id;
            this.name = data.name;
            this.author = data.author;
            this.price = data.price;
            this.publishDate = data.publishDate;
        }else{
            throw "parameter must be Document";
        }
    }
}
export default Document;