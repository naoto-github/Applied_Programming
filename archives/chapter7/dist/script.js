// Robotクラスを定義
class Robot{

  // コンストラクタ
  constructor(name){
    // nameプロパティに代入
    this.name = name;
  }
  
  // helloメソッド
  hello(){
    document.write(`<p>Hello, my name is ${this.name}!</p>`)
  }
  
}

// インスタンスの作成
let robin = new Robot("Robin");

// nameプロパティ
document.write(`<p>robot.name=${robin.name}</p>`);

// helloメソッド
robin.hello();

// RPCRobotクラスを定義
class RPSRobot extends Robot{

  // constructorメソッド
  constructor(name, age){
    super(name);

    // ageプロパティに代入
    this.age = age;
  }

  // helloメソッドのオーバライド
  hello(){
    document.write(`<p>Hello, my name is ${this.name}!</p>`);
    document.write(`<p>I'm ${this.age} years old</p>`);
  }

  rps(){
    let r = Math.floor(Math.random() * 3);
    let hand;
    switch(r){
      case 0:
        hand = "Rock";
        break;
      case 1:
        hand = "Paper";
        break;
      case 2:
        hand = "Scissors";
        break;
    }
    document.write(`<p>My hand is ${hand}!</p>`);
  }

}

// インスタンスの生成
let emma = new RPSRobot("Emma", 5);

// helloメソッド
emma.hello();

// rpsメソッド
emma.rps();

let david = {
  name: "david",
  age: "3",
  hello(){
    document.write(`<p>Hello, my name is ${this.name}!</p>`);
    document.write(`<p>I'm ${this.age} years old</p>`);
  }
}

david.hello();

// オブジェクトからJSONに変換
json = JSON.stringify(david);
document.write(`<p>json=${json}</p>`) 

// JSONからオブジェクトに変換
obj = JSON.parse(json);
document.write(`<p>obj.name=${obj.name}</p>`) 
document.write(`<p>obj.age=${obj.age}</p>`) 

document.write(`<p>obj["name"]=${obj["name"]}</p>`) 
document.write(`<p>obj["age"]=${obj["age"]}</p>`)