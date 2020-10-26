// // class : la ban thiet ke tao nen 1 doi tuong
// //      object: doi tuong cu the dc tao tu class
// //      
// class Person{
//     name;
//     age;
//     address;
//     sex;
//     isMariage;

//     constructor (name, age, address, sex, isMariage){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.sex = sex;
//         this.isMariage = isMariage;

//     }
//     run(){
//         console.log("i'm running");
//     }
//     walk(){
//         console.log("i'm walking");
//     }
//     goTo(destination){
//         console.log(`i'am walking ${destination}`);
//     }
//     caculate(a,b){
//         console.log(`${a+b}`);
//     }
//     sleep = function(){

//     }
// }

// let long = new Person();
// long.name = "long";
// long.age = 20;
// long.address = "ha tay";
// long.isMariage = false;
// long.sex = "gay";
// let hoangAnh = new Person("hoang anh", 20, "Bac Giang", "male", false);
// console.log(hoangAnh);





//ke thua
class Person{
    name;
    sex;
    age;
    slogan;
    constructor(name,sex,age,slogan){
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.slogan = slogan;
    }

}
class GoodBoy extends Person{
    poor;
    constructor(name,sex,age,slogan,poor){
        super(name,sex,age,slogan);
        this.poor = poor;
    }
}
class GoodBoy1 extends GoodBoy{
    action;
    constructor(name,sex,age,slogan,poor,action){
        super(name,sex,age,slogan,poor);
        this.action = action;
    }
}
let g = new GoodBoy1('anh',"male",20,"dsadsa",true,"dosome");
console.log(g);
