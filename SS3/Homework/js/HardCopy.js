import Document from "./Document.js";
 class HardCopy extends Document{
    source;
    constructor(id,name,author,price,publishDate,source){
        super(id,name,author,price,publishDate);
        this.source = source;
    }
    get info(){
        return `
        Document have id = ${this.id}, name : ${this.name}, author : ${this.author}
        , price : ${this.price}, publishDate : ${this.publishDate} source : ${this.source}
        `
    }
}
export default HardCopy;