let text = prompt("nhap chuoi ki tu").split("");
let arr = {};
for (let i = 0; i < text.length; i++) {
    if(arr[text[i]]){
        arr[text[i]]++;
    }else{
        arr[text[i]] = 1;
    }
}
console.log(arr);
