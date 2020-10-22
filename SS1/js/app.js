// let  arr = [1,9,4,7,5,10];
// let arr_1 = arr.sort(function(a,b){return a -b});
// let arr_2= arr_1.filter(function(a){
//     return a % 2 == 0;
// });
// console.log(arr);

// let x = prompt("nhap 1 so x");
// function test1(x){
//     return x == 0;
// }
// function test2(x){

// }
var yes = document.getElementById("yes");
var $no = document.getElementById("no");
var $answer = document.getElementById("answer");
yes.addEventListener("click", () => {
    alert("i know that 😎😎😎");
});
//ghi de su kien
$no.onmouseenter =() => {

}

//them
$no.addEventListener("mouseover",() => {
    $answer.classList.toggle('reverse');
})
 