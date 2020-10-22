let a = prompt("nhap 1 day so bat ky");
let num = Number(prompt("nhap x"));
let arr = a.split(",");
for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(Number(arr[i]) + Number(arr[j]) == num){
            console.log("(" + i + "," + j + ")");          
        }
        
    }
    
}
