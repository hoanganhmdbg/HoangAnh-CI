import Document from "./Document.js";
import Ebook from "./Ebook.js";
import HardCopy from "./HardCopy.js";
import DocumentCase from "./DocumentCase.js";
let Ebook1 = new Ebook("1","JavaScrip","abc",120,"2020-05-16");
let Ebook12 = new Ebook("2","Java","abc",120,"2020-02-16");
let HardCopy1 = new HardCopy("3","C# and .Net","abc",130,"2020-03-16");
let HardCopy2 = new HardCopy("4","C, C++","abc",140,"2020-01-16");
let Documents = [Ebook1,HardCopy1];
let DocumentCase1 = new DocumentCase("st","qwe",Documents,"hoang nah","2020-10-29");
DocumentCase1.addDocument(Ebook12);
DocumentCase1.deleteDocument("1");
DocumentCase1.showDocument();
