class Company{
    constructor(name,establishedDate,country,businessType,employees){
        this.name = name;
        this.establishedDate = establishedDate;
        this.country = country;
        this.businessType = businessType;
        this.employees =employees;
    }
    showAllEmployees(){
        let text = "Employees : ";
        for (let i = 0; i < this.employees.length; i++) {
            text += this.employees[i];
        }
        console.log(text);
    }
    
}