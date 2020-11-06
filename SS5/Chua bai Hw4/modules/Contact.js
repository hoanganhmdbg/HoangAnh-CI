export default class Contact{
    name;
    phoneNumber;
    address;
    email;
    constructor(name,phoneNumber,address,email){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
    }
    showInfo(){
        console.log(`name : ${this.name}
                    phoneNumber : ${this.phoneNumber}`)
    }
}