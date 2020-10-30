import Document from "./Document.js";
class Ebook extends Document{
    discount;
    constructor(id,name,author,price,publicDate,discount){
        super(id,name,author,price,publicDate,discount);
        this.discount = discount;
    }
    get info(){
        return `
        Document have id = ${this.id}, name : ${this.name}, author : ${this.author}
        , price : ${this.price * (1-this.discount/100)}, publishDate : ${this.publishDate}
        `
    }
    
}
export default Ebook;
