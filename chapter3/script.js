let x; //変数xを宣言
x = 2; //変数xに整数2を代入
document.write("<p>x=" + x + "</p>");

let y = 3; //変数yを宣言し，整数3を代入
document.write("<p>y=" + y + "</p>");

x = 4; //変数xを整数4で上書き
document.write("<p>x=" + x + "</p>");

const z = 5; //定数zを宣言し，整数5を代入
document.write("<p>z=" + z + "</p>");

let a = 10;
let b = "abc";
let c = true;
document.write("<p>" + typeof(a) + "</p>");
document.write("<p>" + typeof(b) + "</p>");
document.write("<p>" + typeof(c) + "</p>");

let apple = Symbol();
let fruit = apple;
document.write("<p>" + typeof(fruit) + "</p>");

let name = "Naoto";
let hello = `<p>Hello! ${name}</p>`;
document.write(hello);

document.write(`<p>1+2=${1+2}</p>`);
document.write(`<p>2-1=${2-1}</p>`);
document.write(`<p>2*3=${2*3}</p>`);
document.write(`<p>5/2=${5/2}</p>`);
document.write(`<p>5%2=${5%2}</p>`);
document.write(`<p>5**2=${5**2}</p>`);

let price = 100;
let tax = price * 0.1;
let total = price + tax;
document.write(`<p>price=${total}</p>`);