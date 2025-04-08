// 変数numberが偶数かどうかを判定する関数
function isEven(){
  let number = 12;
  let result = ((number % 2) == 0);
  document.write(`<p>result=${result}</p>`);
}

// isEven関数を呼び出す
isEven()

// 引数numberが偶数かどうかを判定する関数
function isEven2(number){
  let result = ((number % 2) == 0);
  document.write(`<p>result=${result}</p>`);
}

// isEven関数を引数を付けて呼び出す
let number = 12;
isEven2(number);

// 偶数の判定結果を返す関数
function isEven3(number){
  let result = ((number % 2) == 0);
  return result;
}

// isEven関数の帰り値を受け取る
number = 12;
let result = isEven3(number);
document.write(`<p>result=${result}</p>`);

// 引数が奇数かどうかを判定する関数
let isOdd = (number) => {
  let result = ((number % 2) == 1);
  return result;
}

// isOdd関数を呼び出す
number = 12;
result = isOdd(number);
document.write(`<p>result=${result}</p>`);

// isOdd関数の定義を簡略化したisOdd2関数
isOdd2 = number => ((number % 2) == 1);

// isOdd2関数を呼び出す
number = 12;
result = isOdd2(number);
document.write(`<p>result=${result}</p>`);

function shapeRect(width, height){
  let length = 2*width + 2*height; // 周囲の長さ
  let area = width * height; // 面積
  return [length, area]; // 配列を返り値とする
}

// 返り値を配列として受け取る
let shape = shapeRect(10, 20);
let length = shape[0];
let area = shape[1];
document.write(`<p>length=${length} area=${area}</p>`);

// 返り値を分割代入して受け取る
[length, area] = shapeRect(10, 20);
document.write(`<p>length=${length} area=${area}</p>`);