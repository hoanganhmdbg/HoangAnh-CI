import{Vehicle} from "./Vehicle.js"
class Car extends Vehicle{
    static wheels = 4;
    about(){
        //super.about();
        console.log(`xe hoi ${this.name} chay voi toc do ${this.speed}`);
    }
    static aboutCar(){
        console.log("day la xe hoi dc ra doi vao nam yyyy");
    }
    get info(){
        return `
        Đây là xe hơi ${this.name}
        chay với tốc độ là ${this.speed}
        Nó được sản xuất bởi hãng ${this.brand}
        `;
    }
    set preferedSpeed(preferedSpeed){
        if(isNaN(preferedSpeed)){
            console.log("nhap vao 1 so");
        }else{
            this.speed = preferedSpeed;
        }

    }
}