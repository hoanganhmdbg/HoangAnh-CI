export class Vehicle{
    constructor(name,speed,brand){
        this.name = name;
        this.speed = speed;
        this.brand = brand;
    }
    about(){
        console.log(`phuong tien ${this.name} chay voi toc do ${this.speed}`);
    }
}