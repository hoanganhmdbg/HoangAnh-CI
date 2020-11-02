import Document from "./Document.js";
export default class EBook extends Document{
    discount;
    constructor(name,author,price,publishDate,discount){
        super(name,author,price,publishDate);
        this.discount = discount;
    }
    get info(){
        return `
        Price : ${this.price - (1-this.discount / 100)}
        `
    }
}
