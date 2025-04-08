import { createApp, ref, reactive } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  setup(){
    let title = ref("数字当てゲーム");
    let number = ref(1);
    let result = ref("");
    let cards = reactive([
      {"id":1, "url":"https://assets.codepen.io/4660782/card_hearts_01.png"},
      {"id":2, "url":"https://assets.codepen.io/4660782/card_hearts_02.png"},
      {"id":3, "url":"https://assets.codepen.io/4660782/card_hearts_03.png"}
    ]);
    let update = () =>{
      number.value = Math.floor(Math.random() * 3) + 1;
      cards.sort(() => Math.random() - 0.5);
      result.value = "";
    };
    let select = (selectNumber) =>{
      let id = cards[selectNumber].id;
      if(id == number.value){
        result.value = "正解";
      }
      else{
        result.value = "残念";
      }
    };
    return{
      title,
      number,
      result,
      cards,
      update,
      select,
    };
  }
}).mount('#app');