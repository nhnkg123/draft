// truyen tam trị gán thẳng biến mới c=function luôn 
let a=10;
let b=11;
let c=20;
function Cong (a, b){
    return a+b;
}
c=Cong(a, b);
console.log(c);
// truyen tham chieu 
function Nhandoi (x){
    x.value*=2;
}
let e={value:10};
Nhandoi(e);
console.log(e);
// function rut gon
let sayhello = function(){
    console.log("hello world");
}
sayhello();
let hello = () => console.log('hello');
hello();
//arow function
let f = (a, b) => {return a+b};
console.log(f(2, 3));

const x = y => y%2;

console.log(x(11));
