import Contact from "./contact.js";
class ListContact {
    owner;
    contacts;
    constructor(owner) {
        this.owner = owner;
        this.contacts = [];
    }
    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
        }
    }
    updateContact(contact, phoneNumber) {
        if (contact instanceof Contact) {
            for (let item of this.contacts) {
                if (item.phoneNumber == phoneNumber) {
                    item.name = contact.name;
                    item.company = contact.company;
                }
            }
        }
    }
    delContact(phoneNumber) {
        for (let i in this.contacts) {
            if (this.contacts[i].phoneNumber == phoneNumber) {
                this.contacts.splice(i, 1);
                break;
            }
        }
    }
    showListContact() {
        this.contacts.forEach((item) => {
            console.log(`
            name : ${item.name}
            phone : ${item.phoneNumber}
            company : ${item.company}
            `);
        })
    }
    searchContact(phoneNumber) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts.phoneNumber == phoneNumber) {
                console.log(`
            name : ${this.contacts[i].name}
            company : ${this.contacts[i].company}
            `);
                break;
            }

        }
    }
}
