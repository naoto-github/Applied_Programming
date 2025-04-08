// 変数で3つの値を記憶
let x1 = 1
let x2 = 2
let x3 = 3
document.write(`<p>x1=${x1}</p>`)
document.write(`<p>x2=${x2}</p>`)
document.write(`<p>x3=${x3}</p>`)

// 配列で3つの値を記憶
let x = [1, 2, 3]
document.write(`<p>x=${x}</p>`)

// 配列の要素にアクセス
document.write(`<p>x[0]=${x[0]}</p>`)
document.write(`<p>x[1]=${x[1]}</p>`)
document.write(`<p>x[2]=${x[2]}</p>`)

// 連想配列で値を記憶
box = {"x":10, "y":20, "z":30};
document.write(`<p>box["x"]=${box["x"]}</p>`)
document.write(`<p>box["y"]=${box["y"]}</p>`)
document.write(`<p>box["z"]=${box["z"]}</p>`)

// ドット記法で要素を取得
document.write(`<p>box.x=${box.x}</p>`)
document.write(`<p>box.y=${box.y}</p>`)
document.write(`<p>box.z=${box.z}</p>`)

// for文で繰り返し
for(let i=0; i<3; i++){
  document.write(`<p>i=${i}</p>`)
}

// for文で配列の要素を表示
for(let i=0; i<3; i++){
  document.write(`<p>x[${i}]=${x[i]}</p>`)
}

// for文で配列の要素を表示
document.write(`<p>x.length=${x.length}</p>`)
for(let i=0; i<x.length; i++){
  document.write(`<p>x[${i}]=${x[i]}</p>`)
}

// for of で配列の要素を表示
for(let value of x){
  document.write(`<p>value=${value}</p>`)
}

// for in で配列の要素を表示
for(let key in box){
  document.write(`<p>box[${key}]=${box[key]}</p>`)
}

score = {
  "国語": 78,
  "算数": 92,
  "理科": 88,
  "英語": 73,
  "社会": 95
}