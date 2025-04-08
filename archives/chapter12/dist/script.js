import { createApp, ref, reactive, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  setup() {
    let image = ref(null);
    let target = ref(null);
    let results = ref("");
    let classifier = reactive({});
    
    // 非同期で画像分類モデルを読み込む
    onMounted(async () => {
      classifier = await ml5.imageClassifier("MobileNet", () => {
        console.log("Model Loaded!");
      });
    });

    const handle = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        image.value = e.target.result;
      };
      reader.readAsDataURL(file);
    };

    // 画像分類を実行する
    const classify = () => {
      if(classifier){
        classifier.classify(target.value, (error, detection_results) => {
          results.value = detection_results;
        });
      }
    };

    return {
      image,
      target,
      results,
      handle,
      classify
    };
  }
}).mount('#app');