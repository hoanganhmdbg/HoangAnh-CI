class Company{
    employee = [];
    constructor(name,establishedDate,country,businessType,employees){
        this.name = name;
        this.establishedDate = establishedDate;
        this.country = country;
        this.businessType = businessType;
        this.employees = employees;
    }
    showAllEmployees(){
        // let text = "Employees : ";
        // for (let i = 0; i < this.employees.length; i++) {
        //     text += this.employees[i];
        // }
        // console.log(text);
        this.employees.forEach((employee,index) => {
            console.log(`${index + 1} : ${employee.name} `)
        });
    }

    
}
class Employee{
    constructor(name,age,sex,address){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }
    about(){
        console.log("about");
    }
}
class CEO extends Employee{
    constructor(name,age,sex,address,strategy){
        super(name,age,sex,address);
        this.strategy = strategy;
    }
}
class Manager extends Employee{
    constructor(name,age,sex,address,managerStyle){
        super(name,age,sex,address);
        this.managerStyle = managerStyle;
    }
}
class Staff extends Employee{
    constructor(name,age,sex,address,experience){
        super(name,age,sex,address);
        this.experience = experience;
    }
}
let a = new CEO("a",40,"male","hanoi","cmm");
let b = new Manager("b",30,"male","bacninh","cmm");
let c = new Manager("c",30,"male","bacninh","cmm");
let d = new Manager("d",30,"male","bacninh","cmm");
let e = new Manager("e",30,"male","bacninh","cmm");
let f = new Staff("f",20,"male","bacgiang",10);
let g = new Staff("g",20,"male","bacgiang",10);
let h = new Staff("h",20,"male","bacgiang",10);
let i = new Staff("i",20,"male","bacgiang",10);
let k = new Staff("k",20,"male","bacgiang",10);
let l = new Staff("l",20,"male","bacgiang",10);
let m = new Staff("m",20,"male","bacgiang",10);
let x = new Staff("x",20,"male","bacgiang",10);
let y = new Staff("y",20,"male","bacgiang",10);
let z = new Staff("z",20,"male","bacgiang",10);
let employees = [a,b,c,d,e,f,g,h,i,k,l,m,x,y,z];
let hoanganh = new Company("hoanganh",2010,"US","hoicmm",employees);
console.log(hoanganh.showAllEmployees()); 