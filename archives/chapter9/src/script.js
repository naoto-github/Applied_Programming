import { createApp, ref, reactive } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  setup(){
    let quiz = reactive({
      "quiz":"英単語を選択しなさい", 
        "word":"学校", 
        "options":["house", "school", "road", "hospital"], 
        "answer":"school"
    });
    let answer = ref("");
    let result = ref("");
    const send = () =>{
      if(answer.value == quiz.answer){
        result.value = "正解";
      }
      else{
        result.value = "残念";
      }
    }
    return{
      quiz,
      answer,
      result,
      send
    };
  }
}).mount('#app');