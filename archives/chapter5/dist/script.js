let x = 5;
document.write(`<p>x==5 ${x==5}</p>`);
document.write(`<p>x!=5 ${x!=5}</p>`);
document.write(`<p>x>3 ${x>3}</p>`);
document.write(`<p>x<3 ${x<3}</p>`);
document.write(`<p>x>=7 ${x>=7}</p>`);
document.write(`<p>x<=7 ${x<=7}</p>`);
document.write(`<p>x=="5" ${x=="5"}</p>`);
document.write(`<p>x==="5" ${x==="5"}</p>`);

let y = 2;
let z = 4;

// 論理積
document.write(`<p>(y==2) && (z==4) ${(y==2) && (z==4)}</p>`);
document.write(`<p>(y==2) && (z==5) ${(y==2) && (z==5)}</p>`);
document.write(`<p>(y==3) && (z==4) ${(y==3) && (z==4)}</p>`);
document.write(`<p>(y==3) && (z==5) ${(y==3) && (z==5)}</p>`);

// 論理和
document.write(`<p>(y==2) || (z==4) ${(y==2) || (z==4)}</p>`);
document.write(`<p>(y==2) || (z==5) ${(y==2) || (z==5)}</p>`);
document.write(`<p>(y==3) || (z==4) ${(y==3) || (z==4)}</p>`);
document.write(`<p>(y==3) || (z==5) ${(y==3) || (z==5)}</p>`);

// 否定
document.write(`<p>!(y==2) ${!(y==2)}</p>`);
document.write(`<p>!(y==3) ${!(y==3)}</p>`);

x = 10
if(x > 0){
  document.write(`<p>x=${x}は正の値です．</p>`);
}

x = -10
if(x > 0){
  document.write(`<p>x=${x}は正の値です．</p>`);
}
else{
  document.write(`<p>x=${x}は0または負の値です．</p>`);
}

x = 0
if(x > 0){
  document.write(`<p>x=${x}は正の値です．</p>`);
}
else if(x < 0){
  document.write(`<p>x=${x}は負の値です．</p>`);
}
else{
  document.write(`<p>x=${x}は0です．</p>`);
}

x = 10
let s = x > 0 ? "正の値です" : "負の値です";
document.write(`<p>x=${x}は${s}</p>`);

let fruit = "apple";
switch(fruit){
  case "apple":
    document.write(`<p>${fruit}はリンゴです．</p>`);
    break;
  case "banana":
    document.write(`<p>${fruit}はバナナです．</p>`);
    break;
  case "grapes":
    document.write(`<p>${fruit}はブドウです．</p>`);
    break;
  default:
    document.write(`<p>${fruit}に該当する果物はありません．</p>`);    
}