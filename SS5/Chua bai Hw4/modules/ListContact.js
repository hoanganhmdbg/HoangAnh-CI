import Contact from "./Contact.js"
export default class ListContact{
    lists;
    constructor(){
        this.lists = [];
    }
    addContact(name,phoneNumber,address = "", email = ""){
        if(name.trim() === ""  || phoneNumber.length != 10 || Number(phoneNumber) == NaN){
            return;
        }
        let contact = new Contact(name,phoneNumber,address,email);
        this.lists.push(contact);
    }
    editContact(phoneNumber,Contact){
        let index = this.lists.findIndex(contact => contact.phoneNumber == phoneNumber);
        if(index >=0){
            this.lists[index]
        }
    }
}